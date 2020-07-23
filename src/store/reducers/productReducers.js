import * as actionTypes from "../actions/actionTypes";
import * as helper from './productUtility';

const initialState = {
    loading: true,
    products: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.productList
            }
        case actionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.FILTER_PRODUCT:
            return {
                ...state,
                loading: true,
                error: action.error,
                products: helper.filterOutProducts(state, action)
            }
        case actionTypes.FILTER_PRODUCT_DONE:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}


export default reducer;