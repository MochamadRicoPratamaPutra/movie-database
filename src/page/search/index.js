import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../component/base/card';
import Style from './search.module.css';
import { useLocation } from 'react-router';
import qs from 'query-string';
import SearchHome from '../../component/base/searchHome';

const Search = () => {
  const [result, setResult] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)
  const location = useLocation();
  const { year, keyword, type } = qs.parse(location.search);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}&s=${keyword}&page=${pageNumber}&y=${year}&type=${type}`)
      .then((res) => {
        setResult((movie) => {
          return [...movie, ...res.data.Search];
        });
        setTotal(res.data.totalResults)
        setCurrent(pageNumber)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword, year, type, pageNumber]);
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
      if(total > 10 * pageNumber && current === pageNumber)
      setPageNumber((prevPageNumber) => prevPageNumber + 1)
    }
  }
  console.log(result);
  console.log(pageNumber);
  console.log(total)
  console.log(current)
  return (
    <div className={Style.container}>
      <SearchHome default={keyword} />
      <br />
      <p className="f-20">Did you search for {keyword}?</p>
      <br />
      <div className={Style.resultSearch}>
        {result.map((item, index) => (
          <Card title={item.Title} poster={item.Poster} year={item.Year} type={item.Type} id={item.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Search;
