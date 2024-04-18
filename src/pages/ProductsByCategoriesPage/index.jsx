import s from './index.module.css'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState,} from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieContainer from '../../components/ProductsByCategorieContainer';
import { productCheckAction, productPriceCheckAction, productSortAction} from '../../store/reducers/productsByCategorieReducer';


export default function ProductsByCategoriesPage() {

    const {categoryId} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategorie(categoryId))
    }, [])

    const productsByCategorieState = useSelector(store =>store.productsByCategories );
    
    const [checked, setChecked] = useState(false);

    const handle_check = () => setChecked(!checked);

    const handle_click = e => dispatch(productCheckAction(e.target.checked))

    const order = event => {
      dispatch(productSortAction(event.target.value));}

    const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const check_products = {
        min_value: parseFloat(min_value.value) || 0,
        max_value: parseFloat(max_value.value) || Infinity}

            dispatch(productPriceCheckAction(check_products));
            event.target.reset();
    }
   
    return (
        <div>
            <section>
         <div>
            <p>Price</p>
            <form onSubmit={check} className={s.form}>
               <input type="number" placeholder='from' name='min_value' />
               <input type="number" placeholder='to' name='max_value' />
               <input type='submit'/>
            </form>
         </div>
            <div>
               <label>
                  <span>Disconted Items</span>
                  <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
               </label>
         </div>
         <div>
            <span>Sorted</span>
            <select onClick={order}>
               <option value="default" defaultValue>By default</option>
               <option value="name">By name (A-Z)</option>
               <option value="price_asc">By price (ASC)</option>
               <option value="price_desc">By price (DESC)</option>
            </select>
         </div>
         </section>
            <div>
                <ProductsByCategorieContainer productsByCategorieState={productsByCategorieState}/>
            </div>
        </div>
    );  
}


