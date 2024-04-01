import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import s from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import Footer from '../../components/Footer'

export default function MainPage() {

  const background_styles = {
    backgroundImage: `url('${backGroundImageHeader}')`
  }
  const banner_styles = {
    backgroundImage: `url('${image_img}')`
  }

  return (
    <div>


      
      <section>
          <h1 className={c.categories_title}>Categories</h1>
            <CategoriesContainer/>
            <h1 className={c.sale}>Sale </h1>
            <ProductsOnSaleContainer/>
        <Footer />
      </section>
    </div>
  )
}