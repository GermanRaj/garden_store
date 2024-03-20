import { loadProductsOnSalesAction } from "../store/reducers/productsOnSaleReducer"


export const getProductsOnSale = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res =>res.json())
    .then(json => dispatch(loadProductsOnSalesAction(json)))
}