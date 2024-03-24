import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import mainpage_img from './image/img_amazing.png'
import s from './index.module.css'


export default function MainPage() {

  const mainpage_styles = {
    backgroundImage: `url('${mainpage_img}')`
  }

  

  return (
    <div className={s.mainpage} style={mainpage_styles}>
       <h1>Amazing Discounts on Garden Products!</h1>
       <button>Check out</button>

      <ProductsOnSaleContainer/>
      
    </div>
  )
}
