import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import image_img from './mediaMain/image.png'
import Footer from '../../components/Footer'


export default function MainPage() {

  const banner_styles = {
    backgroundImage: `url('${image_img}')`
  }
  return (
    <div> 
      <header>Tamara's Main Page</header>
      <section>
        <h2 className={c.categories_title}>Categories</h2>
        <CategoriesContainer/>
        <div className={c.banner} style={banner_styles}></div>
        <h1>5% off on the first order</h1>
        <h2 className={c.sale}>Sale</h2>
          <h1 className={c.categories_title}>Categories</h1>
            <CategoriesContainer/>
            <h1 className={c.sale}>Sale </h1>
            <ProductsOnSaleContainer/>
        <Footer/>
      </section>
    </div>
  )
}
