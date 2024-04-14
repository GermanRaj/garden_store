import React, { useEffect, useState} from 'react'
import AllProductsContainer from '../../components/AllProductsContainer'
import { useDispatch, useSelector} from 'react-redux';
import s from './index.module.css'
import { sortProductsOnSalesAction } from '../../store/reducers/productsOnSaleReducer';

export default function AllProductPage() {

const [ checked, setChecked ] = useState(false);

const handleCheck = () => setChecked(!checked);
console.log(checked);

const dispatch = useDispatch();

const allProductsByState = useSelector(store =>store.productsOnSales )

const order = event => {
    dispatch(sortProductsOnSalesAction(event.target.value))}

  return (
    <div>
      <div>
       <hr class='solid' />
      </div>
      <div className={s.navigation}>
        <p className>Main page</p>
        <p>__</p>
        <div></div>
        <p className={s.navigationAllSales}>All products</p>
      </div>
      <div className={s.title}>
        <p>All Products</p>
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
              <label>
                <span>Discounted items</span>
                <input className={s.checkbox} type='checkbox' checked={checked} onChange={handleCheck}
                onClick={handleCheck} />
              </label>

           <span>Sorted </span>
            <select onInput={order} className={s.byDefault}>
                <option value='by_default'>By default</option>
                <option value='name'>By name (A-Z)</option>
                <option value='price_asc'>By price (ASC)</option>
                <option value='price_desc'>By price (DESC)</option>
              </select>
        </div>
        </div>
      <AllProductsContainer allProductsByState={allProductsByState} />
    </div>
  )
}
