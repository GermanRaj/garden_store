import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import s from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import backGroundImageHeader from './mediaMain/backGroundImageHeader.jpg'
import DiscountForm from '../../components/DiscountForm'



export default function MainPage() {

  const background_styles = {
    backgroundImage: `url('${backGroundImageHeader}')`
  }

  return (
    <div>  
    <header className={s.header} style={background_styles}> 
      <h1 style={{color: 'white'}}>Amazing Discounts <p/> on Garden Products!</h1>
      <button>Check out</button>
    </header>
        <header>
              <section>
                <div >
                    <h2 className={s.categories_title}>Categories</h2>
                    <div className={s.navCat}>
                        <div className={s.dash}></div>
                        <div className={s.navCategories}>All categories</div>
                    </div>
                    <CategoriesContainer/>
              </div>
              </section>
                  <DiscountForm />
                      <section>
                          <h2 className={s.sale}>Sale </h2>
                          <div className={s.navSales}>
                              <div className={s.dashOnsales}></div>
                              <div className={s.navOnSales}>All sales</div>
                          </div>
                          <ProductsOnSaleContainer/>
                      </section>
        </header>     
  </div>

  )
}