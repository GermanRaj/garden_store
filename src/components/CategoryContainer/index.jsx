import React from 'react'
import { getCategories } from '../../Requests/categories';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CategoryCard from '../CategoryCard';
import s from './index.module.css'
import { useParams } from 'react-router-dom';



export default function CategoryContainer() {

  const dispatch = useDispatch();

  useEffect(() => {

     dispatch(getCategories(id))

  }, []);

  const {id} = useParams();

 
const categoriesData = useSelector(store => store.categories);
 

  return (
    
    <div className={s.category_comtainer}>
      {
       categoriesData.map(el => <CategoryCard key={el.id} {...el} />)
       }
    </div>
  
  )
}
