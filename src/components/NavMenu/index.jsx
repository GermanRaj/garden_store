import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo from './media/logo_nav_menu.png'
import basket_buy from './media/icon_garden.png' 
import { useDispatch, useSelector } from 'react-redux'


export default function NavMenu() {


  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el ) => acc + el.count , 0)


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);


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
        <Link to={'/cart'}><div className={s.basket} style={basket_styles}></div></Link>
          <p className={s.count}>{totalCount}</p>
      </div>
     </nav>
    </header>
  )
}

