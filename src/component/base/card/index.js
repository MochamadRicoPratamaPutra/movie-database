import React from 'react';
import Style from './card.module.css';

const Card = ({ title, year, type, poster }) => {
  let trimString = function (string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  };

  return (
    <div className={Style.container}>
      <img src={poster} alt="poster" className={Style.posterCard} />
      <div className={Style.info}>
        <p className={Style.title}>{trimString(title, 20)}</p>
        <p>{type}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Card;
