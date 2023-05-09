import React, {FC} from 'react';
import s from './card.module.scss'

type CardPropsType = {
  name: string
  year: number
  rating: number
  posterUrl: string
}

const Card: FC<CardPropsType> = ({year, name, posterUrl, rating}) => {
  return (
    <div className={s.movieWrapper}>
      <div className={s.image}>
        <img src={posterUrl} alt={name}/>
        <span className={s.movieRating}>{rating}</span>
      </div>
      <p className={s.titleMovie}>{name}</p>
      <p className={s.yearMovie}>{year}</p>
    </div>
  );
};

export default Card;