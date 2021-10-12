import React from 'react';
import Style from './footer.module.css';
import Logo from '../../../asset/logo.png';
const Footer = () => {
  return (
    <footer className={Style.container}>
      <img src={Logo} alt="logo" className={Style.logo} />
      <p className={`f-20 ${Style.footer}`}>Movie Database</p>
    </footer>
  );
};

export default Footer;
