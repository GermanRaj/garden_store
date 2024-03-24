import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import CategoriesContainer from '../../components/CategoriesContainer'
import mainpage_img from './image/img_amazing.png'
import s from './index.module.css'


export default function MainPage() {

  const mainpage_styles = {
    backgroundImage: `url('${mainpage_img}')`
  }

  

  return (
    <div className={[s.mainpage, 'wrapper'].join(' ')} style={mainpage_styles}>
     <section>
     <div>Check out</div>
        <h2 className={s.categories_title}>Categories</h2>
        <h1>Amazing Discounts on Garden Products!</h1>
        <CategoriesContainer/>
        <h1 className={s.sale}>Sale</h1>
        <ProductsOnSaleContainer/>
      </section>
    </div>
  )
}
