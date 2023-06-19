import React from 'react';
import {useParams} from "react-router-dom";

import s from './cardDitails.module.scss'

const CardDetails = () => {

  const {idCard} = useParams()

  return (
    <div className={s.detailsWrapper}>
      {/*<div className={s.image}>*/}
      {/*  <img src={state!.poster.url} alt={state!.name}/>*/}
      {/*</div>*/}
      {/*<div className={s.descriptions}>*/}
      {/*  <h2 className={s.descrItem}><span>Название:</span> {state!.name}</h2>*/}
      {/*  <p className={s.descrItem}><span>Год:</span> {state!.year}</p>*/}
      {/*  <p className={s.descrItem}><span>Описани:</span> {state!.description}</p>*/}
      {/*  <ul className={s.genre}>*/}
      {/*    <span>Жанр:</span>*/}
      {/*    {state!.genres.map(el => {*/}
      {/*      return (*/}
      {/*        <li key={el.name} className={s.genreItem}>{el.name}</li>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </ul>*/}

      {/*</div>*/}
    </div>
  );
};

export default CardDetails;