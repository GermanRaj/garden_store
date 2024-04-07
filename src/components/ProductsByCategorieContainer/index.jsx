import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieCard from '../ProductsByCategorieCard';
import s from './index.module.css'

export default function ProductsByCategorieContainer({categoryId}) {

    const dispatch = useDispatch();

    
    
    useEffect(() => {
        dispatch(getProductsByCategorie(categoryId));
    }, [categoryId]);

    const productsByCategorie = useSelector(store => store.productsByCategorie);

console.log(productsByCategorie);

    return (
        <div className={s.byCategoriesContainer}>
            {
            // productsByCategorie && productsByCategorie.map(el => <ProductsByCategorieCard key={el.id} {...el} />)
            
            }
        </div>
    )
}

