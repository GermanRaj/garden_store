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
                <h6 className={s.title}>{title}</h6>
                <p>{discont_price}</p>
                <div className={s.buttons}>
                <p className={s.buttons} onClick={() => dispatch(decrCountAction(id))}
                >-</p>
                <p className={s.quantity}>{count}</p>
                <p className={s.buttons} onClick={() =>dispatch(incrCountAction(id))}
                >+</p>
                </div>
                <h4>${price * count}</h4>
                <h6 onClick={()=>dispatch(deleteCartItemAction(id))}
                >X</h6>
          </div>
      )
    }


