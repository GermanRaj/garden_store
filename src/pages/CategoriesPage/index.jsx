import React from 'react'
import s from './index.module.css'
import CategoryContainer from '../../components/CategoryContainer'
import { Link } from 'react-router-dom'

export default function CategoriesPage({id}) {

 return (

<Link> 
    <div>
       <section>
                 <h2 className={s.category_titel}>Categories</h2>
                  <CategoryContainer/>
      </section>
      
    </div>
    </Link>
  )
}


