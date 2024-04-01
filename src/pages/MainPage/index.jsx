import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import DiscountForm from '../../components/DiscountForm'

export default function MainPage() {
  return (
    <div>


      
      <section>
          <h1 className={c.categories_title}>Categories</h1>
            <CategoriesContainer/>
            <DiscountForm />
            <h1 className={c.sale}>Sale </h1>
            <ProductsOnSaleContainer/>
      </section>
    </div>
  )
}
