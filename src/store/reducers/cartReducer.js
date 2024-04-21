const defaultState = JSON.parse(localStorage.getItem('cart')) || [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const INCR_COUNT = 'INCR_COUNT';
const DECR_COUNT = 'DECR_COUNT';
const ADD_SINGLE_TO_CART = 'ADD_SINGLE_TO_CART'

export const addToCartAction = (product) => ({ type: ADD_TO_CART, payload: product });
export const deleteCartItemAction = (id) => ({ type: DELETE_CART_ITEM, payload: id });
export const incrCountAction = (id) => ({ type: INCR_COUNT, payload: id });
export const decrCountAction = (id) => ({ type: DECR_COUNT, payload: id });
export const add_single_to_cart_action = product => ({type: ADD_SINGLE_TO_CART, payload: product});


const checkProduct = (state, payload) => {
  const productInState = state.find(el => el.id === payload.id);
  if(productInState){
    productInState.count++
    return [...state]
  } else {
    return [...state, {...payload, count: 1}]
  }
}

const check_one_product = (state, payload) => {
  let product_in_state = state.find(el => el.id === payload.id);
  if(product_in_state) {
     product_in_state += payload.count
     return [...state]
  }
  else {
     return [...state, {...payload}]
  }
}


export const cartReducer = (state=defaultState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if (action.type === ADD_SINGLE_TO_CART) {
    return check_one_product(state, action.payload)
 } 
  else if (action.type === DELETE_CART_ITEM){
    return state.filter(el => el.id !== action.payload)
  } else if (action.type === INCR_COUNT){
    const targetCard = state.find(el => el.id === action.payload);
    targetCard.count++
    return [...state]
  } else if (action.type === DECR_COUNT){
    const targetCard = state.find(el => el.id === action.payload);
    if (targetCard.count === 1){
      state = state.filter(el => el.id !== action.payload)
    } else {
      targetCard.count--
    }
    return [...state]
  }
  return state
}