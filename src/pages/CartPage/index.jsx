import React from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function CartPage() {

const cartState = useSelector(store => store.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState))
      }, [cartState]);

  return (
    <div>
        <CartContainer/>
    </div>
  )
}
