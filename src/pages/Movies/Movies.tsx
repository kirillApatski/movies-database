import React from 'react'

import { useGetMoviesQuery } from 'Api/muviesApi'
import Card from 'components/common/Card/Card'
import { Link } from 'react-router-dom'
import { CustomPagination } from 'components/common/CustomPagination/CustomPagination'
import s from './movies.module.scss'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const { data, isLoading, isFetching } = useGetMoviesQuery(searchParams.get('page'))
  return (
    <>
      <div className={s.wrapper}>
        {isLoading
          ? [...new Array(14)].map((_, index) => (
              <Skeleton key={index + Date()} className={s.skeletonItem} />
            ))
          : data?.docs.map(movie => {
              return isFetching ? (
                <Skeleton key={movie.id} className={s.skeletonItem} />
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
      <CustomPagination
        pageCount={data?.pages}
        currentPage={data?.page}
        onClickPage={setSearchParams}
      />
    </>
  )
}

export default Movies
