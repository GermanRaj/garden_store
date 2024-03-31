import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import s from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import image_img from './mediaMain/image.png'
import backGroundImageHeader from './mediaMain/backGroundImageHeader.jpg'



export default function MainPage() {

  const background_styles = {
    backgroundImage: `url('${backGroundImageHeader}')`
  }
  const banner_styles = {
    backgroundImage: `url('${image_img}')`
  }

  return (
    <div>  
        <header className={s.header} style={background_styles}> 
          <h1 style={{color: 'white'}}>Amazing Discounts <p/> on Garden Products!</h1>
          <button>Check out</button>
        </header>
            <header>
                  <section>
                         <h2 className={s.categories_title}>Categories</h2>
                      
                        <CategoriesContainer/>
                  </section>
                      <div className={s.banner} style={banner_styles}>
                            <h1>5% off on the first order</h1>
                            <p>Name</p>
                            <p>Phone number</p>
                            <p>Email</p>
                            <p>Get a discount</p>
                      </div>
                          <section>
                              <h2 className={s.sale}>Sale </h2>
                              <ProductsOnSaleContainer/>
                          </section>
            </header>     
      </div>
    
  )
}