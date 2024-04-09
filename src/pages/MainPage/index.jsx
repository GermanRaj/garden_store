import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import s from './index.module.css'
import backGroundImageHeader from './mediaMain/backGroundImageHeader.jpg'
import DiscountForm from '../../components/DiscountForm'
import { Link } from 'react-router-dom'
import CategoriesContainerMain from '../../components/CategoriesContainerMain'



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
                <div className={s.position} >
                    <h2 className={s.categories_title}>Categories</h2>
                        <div className={s.dash}></div>
                        <Link to= {`/categories/all`}>
                        <div className={s.navCategories}>All categories</div>
                        </Link>
                    </div>
                      <CategoriesContainerMain/>
              </section>
                  <DiscountForm />
                      <section>
                          <div className={s.postition1}>
                              <h2 className={s.sale}>Sale </h2>
                                <div className={s.dashOnsales}></div>
                                <Link to={`/allsales`}>
                                <div className={s.navOnSales}>All sales</div>
                                </Link>
                          </div>
                          <ProductsOnSaleContainer/>
                      </section>
        </header>     
  </div>

  )
}