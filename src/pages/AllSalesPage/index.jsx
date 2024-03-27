import React from 'react'
import s from './index.module.css'

export default function AllSalesPage() {
  return (
    <div>
      <div className={s.navigation}>
        <p className>Main page</p>
        <p>__</p>
        <div></div>
        <p className={s.navigationAllSales}>All sales</p>
      </div>
      <div className={s.title}>
        <p>Discounted items</p>
      </div>
    
    <div className={s.sortContainer}>
      
        <div className={s.priceTitle}>
          <span>Price </span>
          <div>
              <form>
          <input className={s.formFrom}  type="text" placeholder="from" name="from"/>
          <input className={s.formTo} type="text" placeholder="to" name="to"/>
              </form>
          </div>
        </div>


        <div className={s.sortedTitle}>
           <span>Sorted </span>
            <select className={s.byDefault}>
              <option>by default </option>
            </select>
        </div>

    </div>
    </div>
  )
}
