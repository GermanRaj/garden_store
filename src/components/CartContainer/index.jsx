import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../CartCard'
import s from './index.module.css'


export default function CartContainer() {

  
    const cartState = useSelector(store => store.cart)

  return (
    <div className={s.container}>
      <h1>Shopping cart</h1>
        {
            cartState.map(el => <CartCard key={el.id} {...el}/>)
        }
      
    </div>
  )
}


