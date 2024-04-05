import React from 'react'
import { domen } from '../../domen'
import s from './index.module.css'


export default function CategoriesCard({ image, title   }) {
  return (
    
    <div className={s.categories_card}>
      <img src={`${domen}${image}`} alt={title} />
      <p>{ title }</p>
    </div>

  )
}
