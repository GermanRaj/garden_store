import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';



const rootReducer = combineReducers({


productsOnSales: productsOnSaleReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))