import React from 'react'
import s from 'components/Layout/Header/header.module.scss'
import LogoIcon from 'assets/icons/LogoIcon'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <LogoIcon />
        <h2 className={s.siteTitle}>Movies Database</h2>
      </div>
      <ul className={s.navLinks}>
        <NavLink className={s.link} to={'/movies'}>
          movies
        </NavLink>
        <NavLink className={s.link} to={'/series'}>
          series
        </NavLink>
      </ul>
    </header>
  )
}

export default Header
