import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';
import { productsByCategorieReducer } from './reducers/productsByCategorieReducer';

const rootReducer = combineReducers({

mainCategories: categoriesReducer, 
productsOnSales: productsOnSaleReducer,
productsByCategories: productsByCategorieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))