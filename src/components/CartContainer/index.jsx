import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../CartCard'
import s from './index.module.css'
import Modal from '../Modal'


export default function CartContainer() {

    const [modalActive, setModalActive] = useState(false)

    const cartState = useSelector(store => store.cart)

  return (
    <div>
        {
            cartState.map(el => <CartCard key={el.id} {...el}/>)
        }
        <button onClick={()=> setModalActive(true) }>ORDER</button>
        {/* <Modal active={modalActive} setActive={setModalActive}/> */}
    </div>
  )
}
