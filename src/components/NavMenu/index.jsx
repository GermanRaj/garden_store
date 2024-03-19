import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div>
     <Link to='/'>Main Page</Link>
     <Link to='/categories'>Categories</Link>
     <Link to='/allproducts'>All products</Link>
     <Link to='/allsales'> All sales </Link>

    </div>
  )
}

