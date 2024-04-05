import s from './index.module.css'
import AllProductsOnSalesContainer from '../../components/AllProductsOnSalesContainer'
import {  useDispatch, useSelector } from 'react-redux';
import { sortProductsOnSalesAction } from '../../store/reducers/productsOnSaleReducer'



export default function AllSalesPage() {
  
  const dispatch = useDispatch();

  const productsBySaleState = useSelector(store =>store.productsOnSales )


  const order = event => {
  dispatch(sortProductsOnSalesAction(event.target.value))
}

  return (
    <div>
      <div>
       <hr class='solid' />
      </div>
      <div className={s.navigation}>
        <p className>Main page</p>
        <p>__</p>
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
            <select onInput={order} className={s.byDefault}>
                <option value='by_default'>By default</option>
                <option value='name'>By name (A-Z)</option>
                <option value='price_asc'>By price (ASC)</option>
                <option value='price_desc'>By price (DESC)</option>
            </select>
        </div>
    </div>
    <AllProductsOnSalesContainer productsBySaleState ={productsBySaleState}/>    
  </div>
  
  )
  
}
