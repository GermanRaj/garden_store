import React, { useEffect, useState } from 'react'
import { domen } from '../../domen'
import s from './index.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { add_single_to_cart_action } from '../../store/reducers/cartReducer'
import { getCategoriesList } from '../../Requests/categories'
import { Link } from 'react-router-dom'


export default function SingleProductCard({id, categoryId, title, image, discont_price , price, description}) {

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

     const [error_message, setErrorMessage] = useState('');
     const [count, setCount] = useState(0);
     
     const incr_count = () => {
        setCount(count + 1);
     };
     const decr_count = () => {
        if (count > 0) {
           setCount(count - 1);
        }
     };
     const add_to_cart = () => {
        if (count === 0) {
           setErrorMessage("Unable to order 0 quantity");
           return;
        }
        dispatch(add_single_to_cart_action({id, image, title, price, discont_price, count}))
        setErrorMessage('');
        setCount(0);
     };
    
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
            <Link to={`/product/${categoryId}`}>
                <div className={s.navigationCategoryName}>
                        <div className={s.categoryStyle}>{categories_data.length > 0 ? get_category_title(categoryId) : 'Loading...'}</div>
                        <p>__</p>
               </div>
            </Link>
            <Link to={`/products/${id}`}>
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
                                    <p onClick={decr_count}>-</p>
                                    <p>{count}</p>
                                    <p onClick={incr_count}>+</p>
                               </div>
                               <button onClick={add_to_cart}> Add to cart </button>
                               </section>
                                 <div className={s.errorr}>
                                  <p style={{ color: 'black' }}>{error_message}</p>
                                 </div>
                            
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
