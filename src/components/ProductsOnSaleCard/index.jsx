import React from 'react'
import { domen } from '../../domen'
import s from './index.module.css'


export default function ProductsOnSaleCard({image, title, price, discont_price}) {
  return (
    <div className={s.products_on_sales} >
      <img src={`${domen}${image}`} alt={title} />
      <p>{ title }</p>
      <p> ${price} </p>
      <p> ${discont_price}</p>
      <p>{Math.floor(100-(discont_price*100/price))} %</p>
    </div>
  )
}
