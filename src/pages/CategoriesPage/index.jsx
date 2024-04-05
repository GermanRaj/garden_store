import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import CategoryContainer from '../../components/CategoryContainer'

export default function CategoriesPage({id}) {

 return (

<Link to={`/categories/${id}`}> 
    <div>
      
       <section>
                         <h2 className={s.category_titel}>Categories</h2>
                      
                       <CategoryContainer/>
                  </section>
                 
    </div>
    </Link>
  )
}


