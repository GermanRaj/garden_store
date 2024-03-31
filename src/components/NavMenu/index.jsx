import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo from './media/logo_nav_menu.png'
import basket_buy from './media/icon_garden.png' 



export default function NavMenu() {

  const basket_styles= {
    backgroundImage: `url('${basket_buy}')`

  }

    return (
    <header className={s.header}>
      
    <nav>
      <img src={logo} alt='logo'/>
    <div className={s.nav_menu}>
     <Link to='/'>Main Page</Link>
     <Link to='/categories'>Categories</Link>
     <Link to='/allproducts'>All products</Link>
     <Link to='/allsales'> All sales </Link>
     <div className={s.basket} style={basket_styles}></div>
    </div>
    </nav>
    </header>
  )
}

