import React from 'react'
import s from './index.module.css'
import { useEffect } from 'react';
import { getSingleProduct } from '../../Requests/product';
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import SingleProductCard from '../../components/SingeProductCard';



export default function SingleProductPage() {

const dispatch = useDispatch();

const { id } = useParams();

useEffect(() => {
    dispatch(getSingleProduct(id))
}, []);

const singleProductState = useSelector(store => store.singleProduct)

console.log(singleProductState);

// const { image, title, description, price, category } = singleProductState;

    
    
  return (
    <div>
       <div>
         {/* <hr class='solid' /> */}
        </div>
            <div className={s.navigation}>
                <div className={s.navigationMainPage}>
                    <p>Main page</p>
                    <p>__</p>
                </div>
                <div className={s.navigationCategories}>
                    <p>Categories</p>
                    <p>__</p>
                </div>
                <div className={s.navigationCategoryName}>
                    <p >Tools And Equipment</p>
                    <p>__</p>
                </div>
                <div className={s.singleProductName}>
                    <p >Name</p>
                </div>
            </div>
             
             <div className={s.productContainer}>
                {
                singleProductState.map( el => <SingleProductCard key={el.id} {...el}/>)
                }
             </div>
    </div>
  )
}
