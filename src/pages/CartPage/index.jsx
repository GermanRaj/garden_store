import React, { useState } from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CartPage() {

   const dispatch = useDispatch();

  const cartState = useSelector(store => store.cart);

  const totalPrice = cartState.reduce((acc, el) => acc + (el.price * el.count), 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);

  const orderSubmit = event => {
    event.preventDefault();

    const { name, phone_number, email } = event.target;

    const userData = {
      name: name.value,
      phone_number: phone_number.value,
      email: email.value
    }

    event.target.reset()
  }

  return (
    <div>
      {cartState.length === 0 ? (
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
      ) : (
        <div>
          <CartContainer />
          <div className={s.order_form}>
            <span>Order details</span>
            <p>items</p>
            <p>Total</p>
            <div className={s.total_sum_function}>Total sum $ function </div>
            <div className={s.order_container}>
              <form className={s.order_container} onSubmit={orderSubmit}>
                <div className={s.inputs}>
                  <input type="text" placeholder="Name" name="name" />
                  <input type="text" placeholder="Phone number" name="phone_number" />
                  <input type="text" placeholder="Email" name="email" />
                </div>
                <button type="submit">Order</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}