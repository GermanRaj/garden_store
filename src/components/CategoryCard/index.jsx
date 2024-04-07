import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'



export default function CategoryCard({ title, image  }) {
  return (
    < div className={s.category_card}>
       <img src={`${domen}${image}`} alt={title} />
       <p>{ title }</p>
    </div>
  )
}
