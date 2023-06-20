import React, { useState } from 'react'

import { useGetMoviesQuery } from 'Api/muviesApi'
import Card from 'components/common/Card/Card'
import { Link } from 'react-router-dom'
import { CustomPagination } from 'components/common/CustomPagination/CustomPagination'
import s from './movies.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Movies = () => {
  const [currentPage, setCurrentPage] = useState('1')
  const { data, isLoading, isFetching } = useGetMoviesQuery(currentPage)
  console.log(isFetching)
  return (
    <>
      <div className={s.wrapper}>
        {isLoading
          ? [...new Array(20)].map((_, index) => (
              <Skeleton key={index + Date()} className={s.skeletonItem} />
            ))
          : data?.docs.map(movie => {
              return isFetching ? (
                <Skeleton className={s.skeletonItem} />
              ) : (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <Card
                    name={movie.name}
                    year={movie.year}
                    rating={movie.rating.kp}
                    posterUrl={movie.poster.url}
                  />
                </Link>
              )
            })}
      </div>
      <CustomPagination pageCount={data?.pages} onClickPage={setCurrentPage} />
    </>
  )
}

export default Movies
