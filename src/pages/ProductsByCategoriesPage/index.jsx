import s from './index.module.css'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieContainer from '../../components/ProductsByCategorieContainer';
import { loadProductsByCategoriesAction, sortProductsByCategoriesAction, showDiscountedProductsAction } from '../../store/reducers/productsByCategorieReducer';


export default function ProductsByCategoriesPage() {

    const { categoryId } = useParams();
    
    const dispatch = useDispatch();

    const productsByCategorieState = useSelector(store =>store.productsByCategories );

    const [showDiscounted, setShowDiscounted] = useState(false);

    

    useEffect(() => {
        getProductsByCategorie(dispatch, categoryId)
            .then(productsByCategorieState => {
                dispatch(loadProductsByCategoriesAction(productsByCategorieState));
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [categoryId, dispatch]);

    const order = event => {
        dispatch(sortProductsByCategoriesAction(event.target.value))
    }

    const toggleDiscounted = () => {
        setShowDiscounted(!showDiscounted);
        if (!showDiscounted) {
            dispatch(showDiscountedProductsAction());
        } else {
            getProductsByCategorie(dispatch, categoryId)
                .then(productsByCategorieState => {
                    dispatch(loadProductsByCategoriesAction(productsByCategorieState));
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
    };

    return (
        <div>
    
    <div className={s.sortContainer}>
        <div className={s.priceTitle}>
          <span>Price </span>
          <div>
              <form>
          <input className={s.formFrom}  type="text" placeholder="from" name="from"/>
          <input className={s.formTo} type="text" placeholder="to" name="to"/>
              </form>
          </div>
    </div>

    <div className={s.discountedTitle}>
        <span>Discounted items </span>
        <input type="checkbox" checked={showDiscounted} onChange={toggleDiscounted} />
    </div>

        <div className={s.sortedTitle}>
           <span>Sorted </span>
            <select onInput={order} className={s.byDefault}>
                <option value='by_default'>By default</option>
                <option value='name'>By name (A-Z)</option>
                <option value='price_asc'>By price (ASC)</option>
                <option value='price_desc'>By price (DESC)</option>
            </select>
        </div>
    </div>
            {/* <ProductsByCategorieContainer products={productsByCategorieState} /> */}
        </div>
    );  
}