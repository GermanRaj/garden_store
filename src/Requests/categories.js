import { loadCategoriesAction } from "../store/reducers/categoriesReducers"
import { domen } from "../domen"
import { loadCategoryAction } from "../store/reducers/categoryRedusers"



export const getCategoriesList = (dispatch) => {

    fetch(`${domen}/categories/all`)
    .then(res =>res.json())
    .then(json => dispatch(loadCategoriesAction(json)))
     }

     
     export const getCategories = (id) => {
         return dispatch =>{

            fetch(`${domen}/categories/${id}`)
        .then(res =>res.json())
        .then(json => dispatch(loadCategoryAction(json)))
         }

         }

        

         