import { act } from "react-dom/test-utils";

const defaultState = [];


const LOAD_PRODUCTS_ON_SALE = 'LOAD_PRODUCTS_ON_SALE'

const SORT_PRODUCTS_ON_SALE = 'SORT_PRODUCTS_ON_SALE'

export const sortProductsOnSalesAction = (value) =>
({type:SORT_PRODUCTS_ON_SALE, payload: value }) 

export const loadProductsOnSalesAction = (product)  =>
({ type:LOAD_PRODUCTS_ON_SALE, payload: product})

export const productsOnSaleReducer = (state = defaultState, action) =>{
if ( action.type === LOAD_PRODUCTS_ON_SALE ){
    return action.payload
} else if (action.type === SORT_PRODUCTS_ON_SALE){
    if(action.payload === 'name'){
    state.sort((a, b) => a.title.localeCompare(b.title))
} else if (action.payload === 'price_asc'){
    state.sort((a, b) => a.price - b.price)
}else if (action.payload === 'price_desc'){
    state.sort((a, b) => b.price - a.price)
}
return [...state]
}
return state
}
