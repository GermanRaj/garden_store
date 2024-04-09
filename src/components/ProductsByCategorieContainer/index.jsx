import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieCard from '../ProductsByCategorieCard';
import s from './index.module.css'

export default function ProductsByCategorieContainer() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductsByCategorie);
    }, []);

    const productsByCategorie = useSelector(store => store.productsByCategories);

    console.log(productsByCategorie);

    return (
        <div className={s.byCategoriesContainer}>
            {productsByCategorie.map(el => <ProductsByCategorieCard key={el.id} {...el} />)}
        </div>
    )
}

