import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import c from './index.module.css'
import CategoriesContainer from '../../components/CategoriesContainer'
import image_img from './mediaMain/image.png'
import Footer from '../../components/Footer'
import s from './index.module.css'


export default function MainPage() {

  const banner_styles = {
    backgroundImage: `url('${image_img}')`
  }
  return (
    <div> 
        <header> 
          Tamara's Main Page 
        </header>
            <body>
                  <section>
                          <section className={s.hrStyle}>
                            {/* <h2 className={c.categories_title}>Categories</h2>
                            <hr class='solid'/>
                            <p>All categories</p> */}
                          </section>
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
