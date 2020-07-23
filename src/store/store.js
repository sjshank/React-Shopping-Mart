import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ProductReducer from './reducers/productReducers';

const rootReducer = combineReducers({
    product: ProductReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;