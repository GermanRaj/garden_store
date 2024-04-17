import React, { useEffect } from 'react'
import { domen } from '../../domen'
import s from './index.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addToCartAction } from '../../store/reducers/cartReducer'
import { getCategoriesList } from '../../Requests/categories'
import { Link } from 'react-router-dom'


export default function SingleProductCard({id, categoryId, title, image, discont_price , price, description, count }) {

    const img = domen+image;

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getCategoriesList)
    }, []);

    const categories_data = useSelector(store => store.mainCategories)

    const get_category_title = categoryId => {
        const category = categories_data.find(el => el.id === categoryId);
        return category ? category.title : 'Loading...';
     }
    
  return (
    <div>
            <section className={s.navigation}>
            <Link to='/'>
               <div className={s.navigationMainPage}> 
                    <p>Main page</p>
                    <p>__</p> 
               </div>
            </Link>
            <Link to='/categories'>
               <div className={s.navigationCategories}> 
                     <p>Categories</p>
                     <p>__</p> </div>
            </Link>
            <Link to={`/products/${categoryId}`}>
                <div className={s.navigationCategoryName}>
                        <div className={s.categoryStyle}>{categories_data.length > 0 ? get_category_title(categoryId) : 'Loading...'}</div>
                        <p>__</p>
               </div>
            </Link>
            <Link to={`/product/${id}`}>
               <div className={s.singleProductName}> { title } </div>
            </Link>
         </section>
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
                                    <p>{count}</p>
                                    <p>+</p>
                               </div>
                                  <button onClick={()=>dispatch(addToCartAction({id, image, title, price}))} >Add to cart</button>
                            </section>
                                    <section className={s.blockfooter}>
                                        <h3>Description</h3>
                                        <p className={s.description}>{description}</p>
                                        <p>Read more</p>
                                    </section>
                </div>
    </div>
</div>
  )
}
