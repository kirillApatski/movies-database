import React from 'react';
import s from './appBody.module.scss'
import Movies from "components/Movies/Movies";

const AppBody = () => {
  return (
    <section className={s.appBody}>
      <Movies/>
    </section>
  );
};

export default AppBody;