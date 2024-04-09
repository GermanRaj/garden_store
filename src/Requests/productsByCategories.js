import { loadProductsByCategoriesAction } from "../store/reducers/productsByCategorieReducer"
import { domen } from "../domen"

export const getProductsByCategorie = (dispatch, categoryId) => {
    fetch(`${domen}/categories/${categoryId}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoriesAction(json)))
}
