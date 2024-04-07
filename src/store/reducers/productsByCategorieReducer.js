import { act } from "react-dom/test-utils";

const defaultState = {};

const LOAD_PRODUCTS_BY_CATEGORIE = 'LOAD_PRODUCTS_BY_CATEGORIE'
const SORT_PRODUCTS_BY_CATEGORIE = 'SORT_PRODUCTS_BY_CATEGORIE'
const SHOW_DISCOUNTED_PRODUCTS = 'SHOW_DISCOUNTED_PRODUCTS'

export const sortProductsByCategoriesAction = (value) =>
({type:SORT_PRODUCTS_BY_CATEGORIE, payload: value }) 

export const loadProductsByCategoriesAction = (product)  =>
({ type:LOAD_PRODUCTS_BY_CATEGORIE, payload: product})

export const showDiscountedProductsAction = () => ({ type: SHOW_DISCOUNTED_PRODUCTS });

export const productsByCategorieReducer = (state = defaultState, action) =>{
    if ( action.type === LOAD_PRODUCTS_BY_CATEGORIE ){
        return action.payload
    } else if ( action.type === SORT_PRODUCTS_BY_CATEGORIE ){
        if( action.payload === 'name' ){
        state.sort((a, b) => a.title.localeCompare(b.title))
    } else if (action.payload === 'price_asc'){
        state.sort((a, b) => a.price - b.price)
    } else if (action.payload === 'price_desc'){
        state.sort((a, b) => b.price - a.price)
    }
    return [...state]
    } else if (action.payload === SHOW_DISCOUNTED_PRODUCTS) {
        return state.filter(product => product.discont_price !== null)
    }
    return state
    }