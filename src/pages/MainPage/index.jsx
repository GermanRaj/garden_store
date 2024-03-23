import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'

export default function MainPage() {
  return (
    <div>


      
      <section>
        <h1 className={c.sale}>Sale</h1>
            <ProductsOnSaleContainer/>
      </section>
    </div>
  )
}
