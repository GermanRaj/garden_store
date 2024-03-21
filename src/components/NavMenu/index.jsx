import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
     <Link to='/'>Main Page</Link>
     <Link to='/categories'>Categories</Link>
     <Link to='/allproducts'>All products</Link>
     <Link to='/allsales'> All sales </Link>

    </div>
  )
}

