import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'

export default function CategoriesPage() {

 return (
    <div>
       <section>
                         <h2 className={s.categories_title}>Categories</h2>
                      
                        <CategoriesContainer/>
                  </section>
    </div>
  )
}


