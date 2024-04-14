import React from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'

export default function CartPage() {

const cartState = useSelector(store => store.cart);

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
        <CartContainer/>
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
  )
}