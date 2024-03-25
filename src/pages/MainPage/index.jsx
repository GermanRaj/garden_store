import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import image_img from './mediaMain/image.png'
import Footer from '../../components/Footer'
import backGroundImageHeader from './mediaMain/backGroundImageHeader.jpg'


export default function MainPage() {

  const banner_styles = {
    backgroundImage: `url('${image_img}')`
  }

  const background_styles = {
    backgroundImage: `url('${backGroundImageHeader}')`
  }


  return (
    <div className={c.mainPageColor}> 
        <header className={c.header} style={background_styles}> 
          <p>Amazing Discounts <br/> on Garden Products!</p>
          <button>Check out</button>
        </header>
            <body>
                  <section>
                         <h2 className={c.categories_title}>Categories</h2>
                        <CategoriesContainer/>
                  </section>
                      <div className={c.banner} style={banner_styles}>
                            <h1>5% off on the first order</h1>
                            <p>Name</p>
                            <p>Phone number</p>
                            <p>Email</p>
                            <p>Get a discount</p>
                      </div>
                          <section>
                              <h2 className={c.sale}>Sale </h2>
                              <ProductsOnSaleContainer/>
                          </section>
            </body>
                          <footer>
                            <Footer/>
                          </footer>
      </div>
    
  )
}
