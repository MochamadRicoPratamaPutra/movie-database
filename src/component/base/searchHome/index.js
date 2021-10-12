import React, { useState } from 'react';
import Style from './searchHome.module.css';
import { useHistory } from 'react-router';

const SearchHome = () => {
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?keyword=${search}`);
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
        <select name="type" id="type" className={Style.category}>
          <option disabled selected value>
            Add item to?
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <input type="text" className={Style.searchBox} name="year" placeholder="year" />
      </div>
      <button className={`${Style.categoryButton} ${category ? Style.close : Style.open}`} onClick={handleCategory}>
        {category ? 'Close' : 'More category'}
      </button>
      <button className={Style.searchButton} onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchHome;
