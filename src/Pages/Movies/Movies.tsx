import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "store/store";
import {MoviesType} from "Api/muviesApi";
import Card from "components/common/Card/Card";
import {getMovies} from "store/slice/moviesSlice";


const Movies = () => {
  const state = useSelector<AppStateType, MoviesType[]>(state => state.moviesData.docs)
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [])
  return (
    <>
      {
        state.map(movie => {
          return <Card key={movie.id} data={movie}/>
        })
      }
    </>

  );
};

export default Movies;