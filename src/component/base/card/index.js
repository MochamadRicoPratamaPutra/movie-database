import React from 'react';
import Style from './card.module.css';
import { Link } from 'react-router-dom';
import NotFound from '../../../asset/notFound.png'

const Card = ({ title, year, type, poster, id }) => {
  let trimString = function (string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  };

  return (
    <Link to={`/${id}`} className={Style.container}>
      <img src={poster !== 'N/A' ? poster : NotFound} alt="poster" className={Style.posterCard} />
      <div className={Style.info}>
        <p className={Style.title}>{trimString(title, 15)}</p>
        <p className={Style.type}>{type}</p>
        <p>{year}</p>
      </div>
    </Link>
  );
};

export default Card;
