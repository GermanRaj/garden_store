import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../../Requests/categories';
import { useEffect } from 'react';
import CategoriesCard from '../CategoriesCard'
import s from './index.module.css'



export default function CategoriesContainer() {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getCategoriesList)
  }, [])
  

const categoriesMain = useSelector(store => store.mainCategories)

console.log(categoriesMain);


  return (
    <div className={s.categories_container}>
      {
       categoriesMain.slice(0,4).map(el => <CategoriesCard key={el.id} {...el} />)
      }
    </div>

  )
}
