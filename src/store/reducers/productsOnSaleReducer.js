const defaultState = [];


const LOAD_PRODUCTS_ON_SALE = 'LOAD_PRODUCTS_ON_SALE'


export const loadProductsOnSalesAction = (product)  =>
({ type:LOAD_PRODUCTS_ON_SALE, payload: product})

export const productsOnSaleReducer = (state = defaultState, action) =>
{
if ( action.type === LOAD_PRODUCTS_ON_SALE ) {
    return action.payload
}
return state
}
