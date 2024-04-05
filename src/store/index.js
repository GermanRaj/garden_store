import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';
import { productsByCategorieReducer } from './reducers/productsByCategorieReducer';
import { productsPriceFilterReducer } from './reducers/minmaxPriceReducer';
import { singleProductReducer } from './reducers/singleProductReducer';




const rootReducer = combineReducers({
mainCategories: categoriesReducer, 
productsOnSales: productsOnSaleReducer,
productsByCategories: productsByCategorieReducer,
productPriceFilter: productsPriceFilterReducer,
singleProduct: singleProductReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));