import * as actionTypes from './actionTypes';

export const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductSuccess = (productList) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        productList: productList
    }
}

export const fetchProductError = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_ERROR,
        error: error
    }
}

export const filterProductDone = () => {
    return {
        type: actionTypes.FILTER_PRODUCT_DONE
    }
}


export const fetchProducts = () => {
    localStorage.removeItem("garmentProducts");
    return dispatch => {
        dispatch(fetchProductStart());
        fetch("https://garments-shopping-mart.firebaseio.com/products.json", {
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(data => {
            localStorage.setItem("garmentProducts", JSON.stringify(data));
            dispatch(fetchProductSuccess(data));
        }).catch(err => {
            dispatch(fetchProductError(err));
        })
    }
}

export const refineProductList = (filterCriteria) => {
    return {
        type: actionTypes.FILTER_PRODUCT,
        filterCriteria: filterCriteria
    }
}

export const filterProducts = (filterCriteria) => {
    return dispatch => {
        dispatch(fetchProductStart);
        dispatch(refineProductList(filterCriteria));
        setTimeout(() => {
            dispatch(filterProductDone());
        }, 300);
    };
}