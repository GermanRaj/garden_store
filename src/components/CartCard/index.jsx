import React from 'react'
import { domen } from '../../domen'
import {useDispatch} from 'react-redux'
import { decrCountAction, incrCountAction, deleteCartItemAction } from '../../store/reducers/cartReducer'
import s from './index.module.css'





export default function CartCard({id, image, title, price, discont_price, count}) {

    const dispatch = useDispatch()
    return (
          <div className={s.card}>
                <img src={`${domen}${image}`} alt={title} />
                <p>{title}</p>
                <p>{discont_price}</p>
                <button onClick={() => dispatch(decrCountAction(id))}
                >-</button>
                 <p>{count}</p>
                <button onClick={() =>dispatch(incrCountAction(id))}
                >+</button>
                <p>{price * count} $</p>
                <p onClick={()=>dispatch(deleteCartItemAction(id))}
                >X</p>
                

            
          </div>
      )
    }



