import React from 'react';
import s from './Movie.module.scss'
import {MoviesType} from "Api/muviesApi";

type MoviePropsType = {
  movie: MoviesType
}

const Movie  = (props: MoviePropsType) => {

  return (
    <div className={s.movieWrapper}>
      <div className={s.image}>
        <img src={props.movie.poster.url} alt={props.movie.name}/>
        <span className={s.movieRating}>{props.movie.rating.kp}</span>
        <p className={s.titleMovie}>{props.movie.name}</p>
        <p className={s.yearMovie}>{props.movie.year}</p>
      </div>

    </div>
  );
};

export default Movie;