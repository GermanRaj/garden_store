import React from 'react'

export default function ProductsOnSaleCard({image, title, price}) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{ title }</p>
      <p> {price }</p>
    </div>
  )
}
