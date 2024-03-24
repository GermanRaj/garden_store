import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import CategoriesContainer from '../../components/CategoriesContainer'
import Footer from '../../components/Footer'
import mainpage_img from './image/img_amazing.png'
import s from './index.module.css'

export default function MainPage() {

  const mainpage_styles = {
    backgroundImage: `url('${mainpage_img}')`
  }

  

  return (
<MainPage className={s.mainpage_styles}>
    <div>
      <section>
        <h1 className={s.categories_title}>Categories</h1>
        <CategoriesContainer/>
        <h1 className={s.sale}>Sale</h1>
            <ProductsOnSaleContainer/>
            <Footer />
      </section>
    </div>
    </MainPage>
  )
}
