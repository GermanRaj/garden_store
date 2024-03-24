import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'

export default function MainPage() {
  return (
    <div>


      
      <section>
        <h1 className={c.categories_title}>Categories</h1>
        <CategoriesContainer/>
        <h1 className={c.sale}>Sale</h1>
            <ProductsOnSaleContainer/>
      </section>
    </div>
  )
}
