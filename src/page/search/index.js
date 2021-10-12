import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../component/base/card';
import Style from './search.module.css'

const Search = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}&s=batman&page=1`)
      .then((res) => {
        setResult(res.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(result);
  return (
    <div className={Style.container}>
      <p>Did you search for this?</p>
      <div className={Style.resultSearch}>
        {result.map((item) => (
          <Card title={item.Title} poster={item.Poster} year={item.Year} type={item.Type} />
        ))}
      </div>
    </div>
  );
};

export default Search;
