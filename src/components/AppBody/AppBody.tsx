import React from 'react';
import s from './appBody.module.scss'
import Movies from "Pages/Movies/Movies";
import {Route, Routes} from "react-router-dom";
import TvSeries from "Pages/tvSeries/TvSeries";
import Layout from "components/Layout/Layout";

const AppBody = () => {
  return (
    <section className={s.appBody}>
      <div className={s.wrapper}>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Movies/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="series" element={<TvSeries/>}/>
        </Routes>
      </div>
    </section>
  );
};

export default AppBody;