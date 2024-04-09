import React from 'react'
import { domen } from '../../domen'
import s from './index.module.css'

export default function SingleProductCard({title, image, discont_price , price, description }) {

    const img = domen+image;
  return (
    <div className={s.productCard}>
            <img src={img} alt={title} />
                <div className={s.textPosition}>
                    <h3> {title} </h3>
                    <section className={s.PricesAndDiscounts}>
                        <p> ${discont_price}</p> 
                        <p> ${price} </p> 
                        <p>-{Math.floor(100-(discont_price*100/price))} %</p>
                    </section>
                            <section className={s.cartFunction}>
                                <div className={s.addOrDeleteForm}>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>
                               </div>
                                  <button>Add to cart</button>
                            </section>
                                    <section className={s.blockfooter}>
                                        <h3>Description</h3>
                                        <p className={s.description}>{description}</p>
                                        <p>Read more</p>
                                    </section>
                </div>
    </div>
  )
}
