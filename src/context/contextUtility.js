import * as actionTypes from './actionConstants';

export const addProductIntoCart = (state, action) => {
    const _newProduct = { ...action.newProduct };
    _newProduct['quantity'] = 1;
    const totalPrice = updateTotalPrice(state, _newProduct['price'], 'Add');
    return {
        ...state,
        checkoutProducts: state.checkoutProducts.concat(_newProduct),
        totalPrice: totalPrice
    }
}

export const removeProductFromCart = (state, action) => {
    let _currentCheckoutProducts = [...state.checkoutProducts];
    let _updatedCheckoutProducts = _currentCheckoutProducts.filter((product) => {
        return product && action && product.id !== action.productId;
    });
    const totalPrice = updateTotalPrice(state, action.productPrice, 'Remove');
    return {
        ...state,
        checkoutProducts: _updatedCheckoutProducts,
        totalPrice: totalPrice
    }
}

export const updateProductQuantity = (state, action) => {
    let _operationName = 'Add';
    let _currentCheckoutProducts = [...state.checkoutProducts];
    let _updatedCheckoutProducts = _currentCheckoutProducts.map((product) => {
        const _product = { ...product };
        if (product && product.id === action.productId) {
            if (action.type === actionTypes.PRODUCT_ITEM_INCREMENT) {
                _product['quantity'] = _product['quantity'] + 1;
            }
            else if (action.type === actionTypes.PRODUCT_ITEM_DECREMENT) {
                _operationName = 'Remove'
                _product['quantity'] = _product['quantity'] !== 1 ? _product['quantity'] - 1 : _product['quantity'];
            }
        }
        return _product;
    });
    const totalPrice = updateTotalPrice(state, action.productPrice, _operationName);
    return {
        ...state,
        checkoutProducts: _updatedCheckoutProducts,
        totalPrice: totalPrice
    }
}

export const updateTotalPrice = (state, price, operationName) => {
    let totalPrice = state.totalPrice;
    if (operationName === 'Add') {
        totalPrice = totalPrice + price;
    } else {
        totalPrice = totalPrice - price;
    }
    console.log(totalPrice);
    return totalPrice;
}