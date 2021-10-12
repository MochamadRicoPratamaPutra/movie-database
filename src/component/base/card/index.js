import React from 'react';
import Style from './card.module.css';
import { Link } from 'react-router-dom';
import NotFound from '../../../asset/notFound.png';
import { useHistory } from 'react-router';
import { ModalCard } from '../modal';

const Card = ({ title, year, type, poster, id }) => {
  const history = useHistory();
  let trimString = function (string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
  };
  return (
    <div className={Style.container}>
      <img
        src={poster !== 'N/A' ? poster : NotFound}
        alt="poster"
        className={Style.posterCard}
        onClick={() => ModalCard(poster, title, year, id, history)}
      />
      <Link to={`/${id}`} className={Style.info}>
        <p className={Style.title}>{trimString(title, 15)}</p>
        <p className={Style.type}>{type}</p>
        <p>{year}</p>
      </Link>
    </div>
  );
};

export default Card;
