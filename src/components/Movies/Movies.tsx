import React from 'react';
import Movie from "components/Movies/Movie/Movie";
import {useSelector} from "react-redux";
import {AppStateType} from "store/store";
import {MoviesType} from "Api/muviesApi";
import s from './movies.module.scss'

const Movies = () => {
  const state = useSelector<AppStateType, MoviesType[]>(state => state.moviesData.docs)

  return (
    // <div className={s.moviesWrapper}>
    //   <Movie logo="https://w.forfun.com/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg"/>
    //
    // </div>
      <div className={s.moviesWrapper}>
        {
          state.map(movie => {
            return <Movie key={movie.id} movie={movie}/>
          })
        }
      </div>

  );
};

export default Movies;