const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const INCREMENT_COUNT_PRODUCT = 'INCREMENT_COUNT_PRODUCT'
const DECREMENT_COUNT_PRODUCT = 'DECREMENT_COUNT_PRODUCT'

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product });


export const singleProductReducer = (state = defaultState, action) => {
  if(action.type === LOAD_SINGLE_PRODUCT){
    return action.payload 
  } return state
}