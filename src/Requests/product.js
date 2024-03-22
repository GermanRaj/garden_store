import { loadProductsOnSalesAction } from "../store/reducers/productsOnSaleReducer"
import { domen } from "../domen"


export const getProductsOnSale = (dispatch) => {
    fetch(`${domen}/products/all`)
    .then(res =>res.json())
    .then(json => dispatch(loadProductsOnSalesAction(json)))
}