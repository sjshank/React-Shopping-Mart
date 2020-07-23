import React, { useReducer } from 'react';
import * as actionTypes from './actionConstants';
import checkoutReducer from './checkoutReducer';

const CheckoutContext = React.createContext(null);

const CheckoutContextProvider = (props) => {
    const [checkoutData, dispatchCheckoutDataAction] = useReducer(checkoutReducer, { checkoutProducts: [], totalPrice: 0 });

    const handleProductAdd = (data) => {
        dispatchCheckoutDataAction({ type: actionTypes.PRODUCT_ADD, newProduct: data });
    }

    const handleProductRemove = (id, price) => {
        dispatchCheckoutDataAction({ type: actionTypes.PRODUCT_REMOVE, productId: id, productPrice: price });
    }

    const handleItemIncrement = (id, price) => {
        dispatchCheckoutDataAction({ type: actionTypes.PRODUCT_ITEM_INCREMENT, productId: id, productPrice: price });
    }

    const handleItemDecrement = (id, price) => {
        dispatchCheckoutDataAction({ type: actionTypes.PRODUCT_ITEM_DECREMENT, productId: id, productPrice: price });
    }

    return (
        <CheckoutContext.Provider value={{
            checkoutProducts: checkoutData.checkoutProducts,
            totalPrice: checkoutData.totalPrice,
            handleProductAdd,
            handleProductRemove,
            handleItemIncrement,
            handleItemDecrement
        }}>
            {props.children}
        </CheckoutContext.Provider>
    )
};

export { CheckoutContext, CheckoutContextProvider }