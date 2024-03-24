import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo from './media/logo_nav_menu.png'



export default function NavMenu() {
   return (

    <header className={s.header}>
      <img src={logo} alt='logo'/>
      <nav>
    <div className={s.nav_menu}>
     <Link to='/'>Main Page</Link>
     <Link to='/categories'>Categories</Link>
     <Link to='/allproducts'>All products</Link>
     <Link to='/allsales'> All sales </Link>
    </div>
    </nav>
    <div>X</div>
    </header>
  )
}

