import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';
import { productsPriceFilterReducer } from './reducers/minmaxPriceReducer';



const rootReducer = combineReducers({

mainCategories: categoriesReducer, 
productsOnSales: productsOnSaleReducer,
productPriceFilter: productsPriceFilterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))