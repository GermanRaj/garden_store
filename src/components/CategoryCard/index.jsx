import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { domen } from '../../domen'
import CategoryTitle from '../../pages/CategoryTitle'



export default function CategoryCard({category, title, image  }) {
  return (
<Link> 
    < div className={s.category_card}>
       {category}
       <img src={`${domen}${image}`} alt={title} />
      <p>{ title }</p>
    </div>
    </Link>
  )
}
