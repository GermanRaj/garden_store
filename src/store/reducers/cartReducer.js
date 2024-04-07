const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';
const CLEAR_CART = 'CLEAR_CART'

export const addToCartAction = (product) => ({ type: ADD_TO_CART, payload: product });
export const deleteCartItemAction = (id) => ({ type: DELETE_CART_ITEM, payload: id });
export const incrCountAction = (id) => ({ type: INCR_COUNT, payload: id });
export const decrCountAction = (id) => ({ type: DECR_COUNT, payload: id });
export const clearCartAction = () => ({ type: CLEAR_CART });



export const cartReducer = (state = defaultState, action) => {
     
    return state;
      }