import React from 'react'
import { domen } from '../../domen'

export default function SingleProductCard({title, image}) {

    const img = domen+image;
  return (
    <div>
    <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  )
}
