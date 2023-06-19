import React, { FC } from 'react'
import s from './card.module.scss'

type CardPropsType = {
  name: string
  year: number
  rating: number
  posterUrl: string
}

const Card: FC<CardPropsType> = ({ year, name, posterUrl, rating }) => {
  return (
    <div className={s.movieWrapper}>
      <div className={s.image}>
        <img src={posterUrl} alt={name} title={name} />
        <span className={s.movieRating}>{rating}</span>
      </div>
      <div className={s.descr}>
        <p className={s.titleMovie}>{name}</p>
        <p className={s.yearMovie}>{year}</p>
      </div>
    </div>
    // <div className={s.movieWrapper}>
    //   <div className={s.image}>
    //     <img
    //       src={'https://i.pinimg.com/originals/8a/de/fe/8adefe5af862b4f9cec286c6ee4722cb.jpg'}
    //       alt={name}
    //     />
    //     <span className={s.movieRating}>3.444</span>
    //   </div>
    //   <div className={s.descr}>
    //     <p className={s.titleMovie}>LoremLoremLorem</p>
    //     <p className={s.yearMovie}>1000</p>
    //   </div>
    // </div>
  )
}

export default Card
