import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'
import { Link } from 'react-router-dom'

export default function ProductsByCategoriesCard({image, title, discont_price, price}) {
    return (
      <div className={s.productCard} >
        <img src={`${domen}${image}`} alt={title} />
        <div>
            <p className={s.productTitle}> {title}</p>
            <div className={s.productPrice}>
              <p> ${discont_price}</p> 
              <p> ${price} </p> 
            </div>
            <p className={s.productSale}>-{Math.floor(100-(discont_price*100/price))}%</p>
        </div>
    </div>
    )
  } 