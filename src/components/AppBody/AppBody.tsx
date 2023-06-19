import React from 'react'
import s from './appBody.module.scss'
import Movies from 'pages/Movies/Movies'
import { Route, Routes } from 'react-router-dom'
import TvSeries from 'pages/tvSeries/TvSeries'
import CardDetails from 'components/common/CardDetails/CardDetails'

const AppBody = () => {
  return (
    <section className={s.appBody}>
      <Routes>
        <Route element={<Movies />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:idCard' element={<CardDetails />} />
        <Route path='series' element={<TvSeries />} />
        <Route path='series/:idCard' element={<CardDetails />} />
      </Routes>
    </section>
  )
}

export default AppBody
