import React from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CartPage() {

const cartState = useSelector(store => store.cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState))
      }, [cartState]);

  return (
    <div>
      {
        cartState.length ===0
        ? 
        <section>
          <div className={s.line}></div>
          <div className={s.position}>
              <h2 className={s.title}>Shopping cart</h2>
                 <p>Back to the store</p>
                 <div className={s.dash}></div>
          </div>
          <p className={s.text}>Looks like you have no items in your basket currently</p>
          <Link to={'/'}> 
          <button className={s.btn}>Continue Shopping</button>
          </Link>
        </section>
        : <CartContainer/>
      }
    </div>
  )
}




