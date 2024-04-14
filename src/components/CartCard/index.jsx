import React from 'react'
import { domen } from '../../domen'
import {useDispatch} from 'react-redux'
import { decrCountAction, incrCountAction, deleteCartItemAction } from '../../store/reducers/cartReducer'


export default function CartCard({id, image, title, price, discont_price, count}) {

    const dispatch = useDispatch()
    return (
          <div>
                <img src={`${domen}${image}`} alt={title} />
                <p>{title}</p>
                <p>{price * count} $</p>
                <p>{discont_price}</p>
                <p>{count}</p>
                <button onClick={() => dispatch(decrCountAction(id))}
                >-</button>
                <button onClick={() =>dispatch(incrCountAction(id))}
                >+</button>
                <p onClick={()=>dispatch(deleteCartItemAction(id))}
                >X</p>
            
          </div>
      )
    }



