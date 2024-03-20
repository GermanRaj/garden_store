import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOnSale } from '../../Requests/product';
import ProductsOnSaleCard from '../ProductsOnSaleCard';

export default function ProductsOnSaleContainer() {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductsOnSale)
}, [])

const productsOnSaleData = useSelector(store => store.productsOnSales)
console.log(productsOnSaleData);


  return (
    <div>
        {
        productsOnSaleData.map(el=> <ProductsOnSaleCard key ={el.id} {...el} /> )
        }
    </div>
  )
}
