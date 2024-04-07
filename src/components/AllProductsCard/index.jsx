import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'
import { Link } from 'react-router-dom'


export default function AllProductsCard({id, image, title, discont_price, price}) {
  return (
    <div className={s.productCard} >
    <img src={`${domen}${image}`} alt={title} />
        <div>
          <Link >
            <p> {title}</p>
            <p> ${discont_price}</p> 
            <p> ${price} </p> 
            <p>-{Math.floor(100-(discont_price*100/price))} %</p>
          </Link>
        </div>
    
  </div>
  )
}