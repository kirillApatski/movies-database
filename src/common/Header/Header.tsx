import React from 'react';
import s from './header.module.scss'
import LogoIcon from "assets/icons/LogoIcon";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <LogoIcon/>
      </div>
      <h2 className={s.siteTitle}>Movies Database</h2>
    </header>
  );
};

export default Header;