import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import Style from './detail.module.css';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../config/redux/action/movie';
import Swal from 'sweetalert2';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [ratings, setRatings] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  dispatch(getMovie(id));
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}&i=${id}&plot=full`)
      .then((res) => {
        setMovie(res.data);
        setRatings(res.data.Ratings);
      })
      .catch(() => {
        history.push('/');
      });
  }, [id, history]);
  const handlePoster = () => {
    Swal.fire({
      imageUrl: movie.Poster,
      imageHeight: 400,
      imageWidth: 250,
      imageAlt: 'A tall image',
    });
  };
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <img src={movie.Poster} alt="Movie Poster" onClick={handlePoster}/>
        </div>
        <div>
          <p className="f-30">
            {movie.Title} ({movie.Year})
          </p>
          <p className="f-20">
            Type: <span className={Style.type}>{movie.Type}</span>
          </p>
          <p className="f-20">Metascore: {movie.Metascore}</p>
          <p className="f-20">IMDB Rating: {movie.imdbRating}</p>
          <p className="f-20">IMDB Votes: {movie.imdbVotes}</p>
        </div>
      </div>
      <p className="f-30">Information</p>
      <p className="f-20">Genre: {movie.Genre}</p>
      <p className="f-20">Rated: {movie.Rated}</p>
      <p className="f-20">Runtime: {movie.Runtime}</p>
      <p className="f-20">Released: {movie.Released}</p>
      <p className="f-20">Language: {movie.Language}</p>
      <p className="f-30">Plot</p>
      <p className="f-20">{movie.Plot}</p>
      <p className="f-30">Actors</p>
      <p className="f-20">{movie.Actors}</p>
      <p className="f-30">Ratings</p>
      {ratings.map((item) => (
        <ul className="f-20">
          Score: {item.Source}, Value: {item.Value}
        </ul>
      ))}
      <p className="f-30">Others</p>
      <p className="f-20">Awards: {movie.Awards}</p>
      <p className="f-20">DVD: {movie.DVD}</p>
      <p className="f-20">BoxOffice: {movie.BoxOffice}</p>
      <p className="f-20">Production: {movie.Production}</p>
    </div>
  );
};

export default DetailMovie;
