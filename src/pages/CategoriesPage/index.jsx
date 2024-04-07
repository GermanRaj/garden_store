import React from 'react'
import CategoryContainer from '../../components/CategoryContainer'
import s from './index.module.css'

export default function CategoriesPage() {

 return (
  <div>
    <hr />
        <div className={s.navigation}>
          <div className={s.navigationMainPage}>
            <p>Main page</p>
            <p>__</p>
        </div>
            <div className={s.navigationCategories}>
             <p>Categories</p>
           </div>
        </div>
         <h2 className={s.categoriesTitle}>Categories</h2>
  <CategoryContainer />
</div>
);
}
