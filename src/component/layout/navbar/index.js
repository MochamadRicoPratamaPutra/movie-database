import React from 'react';
import Style from './header.module.css';
import Logo from '../../../asset/logo.png';
import SearchBox from '../../base/searchBox';
import { Link } from 'react-router-dom';
const Navbar = ({search}) => {
  return (
    <div className={Style.container}>
      <Link to="/">
        <img src={Logo} alt="logo" className={Style.logo} />
      </Link>
      <SearchBox searchDisplay={search}/>
    </div>
  );
};

export default Navbar;
