const defaultState = [];

const LOAD_PRODUCT_WITH_MIN_PRICE = 'LOAD_PRODUCT_WITH_MIN_PRICE'
const LOAD_PRODUCT_WITH_MAX_PRICE = 'LOAD_PRODUCT_WITH_MAX_PRICE'


export const filterProductsOnPriceMinAction = (value) =>({
    type: LOAD_PRODUCT_WITH_MIN_PRICE, payload: value
})

export const filterProductsOnPriceMaxAction = (value) =>({
    type: LOAD_PRODUCT_WITH_MAX_PRICE, payload: value
})

export const productsPriceFilterReducer = (state= defaultState ,action)=>
{
    if (action.type === LOAD_PRODUCT_WITH_MIN_PRICE) {
        
    }
    return state
}
