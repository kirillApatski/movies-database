import React, {FC} from 'react';
import s from './card.module.scss'

type CardPropsType = {
  data: any
}

const Card: FC<CardPropsType> = ({data}) => {
  return (
    <div className={s.movieWrapper}>
      <div className={s.image}>
        <img src={data.poster.url} alt={data.name}/>
        <span className={s.movieRating}>{data.rating.kp}</span>
        <p className={s.titleMovie}>{data.name}</p>
        <p className={s.yearMovie}>{data.year}</p>
      </div>
    </div>
  );
};

export default Card;