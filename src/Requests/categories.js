import { loadCategoriesAction } from "../store/reducers/categoriesReducers"


export const getCategoriesPage = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
    .then(res =>res.json())
    .then(json => dispatch(loadCategoriesAction(json)))
}