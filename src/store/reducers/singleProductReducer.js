const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const INCREMENT_COUNT_PRODUCT = 'INCREMENT_COUNT_PRODUCT'
const DECREMENT_COUNT_PRODUCT = 'DECREMENT_COUNT_PRODUCT'

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product });
export const incrementCountProductAction = product => ({ type: INCREMENT_COUNT_PRODUCT, payload: product });
export const decrementCountProductAction = product => ({ type: DECREMENT_COUNT_PRODUCT, payload: product });

export const singleProductReducer = (state = defaultState, action) => {
  if(action.type === LOAD_SINGLE_PRODUCT){
    return action.payload.map(el => ({...el, count: 1 }))
  } else if(action.payload === INCREMENT_COUNT_PRODUCT) {
    state.count++
    return [...state]
  } else if(action.payload === DECREMENT_COUNT_PRODUCT) {
    state.count--
    return [...state]
  } return state
}