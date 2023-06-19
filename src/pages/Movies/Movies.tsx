import React, { useState } from 'react'

import { useGetMoviesQuery } from 'Api/muviesApi'
import Card from 'components/common/Card/Card'
import { Link } from 'react-router-dom'
import { CustomPagination } from 'components/common/CustomPagination/CustomPagination'
import s from './movies.module.scss'

const Movies = () => {
  const [currentPage, setCurrentPage] = useState('1')
  const { data } = useGetMoviesQuery(currentPage)

  return (
    <>
      <div className={s.wrapper}>
        {data?.docs.map(movie => {
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
        })}
      </div>
      <CustomPagination pageCount={data?.pages} onClickPage={setCurrentPage} />
    </>
  )
}

export default Movies
