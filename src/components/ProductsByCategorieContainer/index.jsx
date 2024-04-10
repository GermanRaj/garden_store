import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieCard from '../ProductsByCategorieCard';
import s from './index.module.css'
import { useParams } from 'react-router-dom'

export default function ProductsByCategorieContainer({productsByCategorieState}) {

    const dispatch = useDispatch();
    
    const { categoryId } = useParams();
    
    useEffect(() => {
        dispatch(getProductsByCategorie(categoryId));
    }, []);
   
    const {data, category} = productsByCategorieState

    return (
        <div className={s.byCategoriesContainer}>
            {data && data.map(el => <ProductsByCategorieCard key={el.id} {...el} />)}
            <h2>{category && category.title}</h2>
        </div>
    )
}

