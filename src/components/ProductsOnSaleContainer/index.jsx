import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOnSale } from '../../Requests/product';
import ProductsOnSaleCard from '../ProductsOnSaleCard';




export default function ProductsOnSaleContainer({image}) {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductsOnSale)
}, [])

const productsOnSaleData = useSelector(store => store.productsOnSales)
console.log(productsOnSaleData);

const shuffledProductsOnSales = productsOnSaleData.sort(() => Math.random() - 0.5);

const randomProductsOnsales = shuffledProductsOnSales.slice(0, 4);

  return (
    <div>
        {
        randomProductsOnsales.map(el=> <ProductsOnSaleCard key={el.id}{...el} /> )
        }
    </div>
  )
}
