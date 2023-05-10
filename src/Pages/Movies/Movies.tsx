import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "store/store";
import {MoviesType} from "Api/muviesApi";
import Card from "components/common/Card/Card";
import {getMovies} from "store/slice/moviesSlice";
import {Link} from "react-router-dom";


const Movies = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const state = useSelector<AppStateType, MoviesType[]>(state => state.moviesData.docs)
  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <>
      {
        state.map(movie => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card
                name={movie.name}
                year={movie.year}
                rating={movie.rating.kp}
                posterUrl={movie.poster.url}
              />
            </Link>
          )
        })
      }
    </>
  );
};

export default Movies;