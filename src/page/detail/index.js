import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Style from './detail.module.css';
import { useDispatch } from 'react-redux';
import { getMovie } from '../../config/redux/action/movie';
import { useSelector } from 'react-redux';
import { ModalPosterDetail } from '../../component/base/modal';
import { Link } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovie(id))
  }, [id, dispatch]);
  const movie = useSelector((state) => state.movie);
  const ratings = useSelector((state) => state.ratings);
  return (
    <>
      {movie.Error ? (
        <div className={Style.error}>
          <h1>{movie.Error}</h1>
          <h1>Please go back to home and search with correct name/id</h1>
          <Link to='/' className='f-20'>Go to home</Link>
        </div>
      ) : (
        <div className={Style.container}>
          <div className={Style.content}>
            <div>
              <img src={movie.Poster} alt="Movie Poster" onClick={() => ModalPosterDetail(movie.Poster, movie.Title, movie.Year)} />
            </div>
            <div>
              <p className="f-30">
                {movie.Title} ({movie.Year})
              </p>
              <div className={Style.information}>
                <div>
                  <p className="f-20">
                    Type: <span className={Style.type}>{movie.Type}</span>
                  </p>
                  <p className="f-20">Metascore: {movie.Metascore}</p>
                  <p className="f-20">IMDB Rating: {movie.imdbRating}</p>
                  <p className="f-20">IMDB Votes: {movie.imdbVotes}</p>
                </div>
                <div>
                  <p className="f-20">Genre: {movie.Genre}</p>
                  <p className="f-20">Rated: {movie.Rated}</p>
                  <p className="f-20">Runtime: {movie.Runtime}</p>
                  <p className="f-20">Released: {movie.Released}</p>
                  <p className="f-20">Language: {movie.Language}</p>
                </div>
              </div>
            </div>
          </div>
          <p className={`f-30 f-bold fc-white`}>
            <span className={Style.title}>Plot</span>
          </p>
          <p className="f-20">{movie.Plot}</p>
          <br />
          <p className={`f-30 f-bold fc-white`}>
            <span className={Style.title}>Actors</span>
          </p>
          <p className="f-20">{movie.Actors}</p>
          <br />
          <p className={`f-30 f-bold fc-white`}>
            <span className={Style.title}>Ratings</span>
          </p>
          {ratings.map((item) => (
            <ul className="f-20">
              Score: {item.Source}, Value: {item.Value}
            </ul>
          ))}
          <br />
          <p className={`f-30 f-bold fc-white`}>
            <span className={Style.title}>Others</span>
          </p>
          <p className="f-20">Awards: {movie.Awards}</p>
          <p className="f-20">DVD: {movie.DVD}</p>
          <p className="f-20">BoxOffice: {movie.BoxOffice}</p>
          <p className="f-20">Production: {movie.Production}</p>
        </div>
      )}
    </>
  );
};

export default DetailMovie;
