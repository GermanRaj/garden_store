import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';



const rootReducer = combineReducers({

mainCategories: categoriesReducer, 
productsOnSales: productsOnSaleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))