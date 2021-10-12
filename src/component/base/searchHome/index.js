import React, { useState } from 'react';
import Style from './searchHome.module.css';
import { useHistory } from 'react-router';

const SearchHome = () => {
  const [search, setSearch] = useState(null);
  const [type, setType] = useState('');
  const [year, setYear] = useState('')
  const [category, setCategory] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== null) {
      history.push(`/search?keyword=${search}&year=${year}&type=${type}`);
    } else {
      alert('You need to input what movie you want to search at the search bar');
    }
  };
  const handleCategory = (e) => {
    if (category) {
      setCategory(!category);
    } else {
      setCategory(!category);
    }
  };
  return (
    <div className={Style.container}>
      <input
        type="text"
        name="title"
        className={Style.searchBox}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={category ? Style.searchCategory : Style.none}>
        <select name="type" id="type" className={Style.category} onChange={(e) => setType(e.target.value)}>
          <option disabled selected value>
            Add item to?
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <input type="number" className={Style.searchBox} name="year" placeholder="year" onChange={(e) => setYear(e.target.value)}/>
      </div>
      <button className={`${Style.categoryButton} ${category ? Style.close : Style.open}`} onClick={handleCategory}>
        {category ? 'Close' : 'More category'}
      </button>
      <button className={Style.searchButton} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchHome;
