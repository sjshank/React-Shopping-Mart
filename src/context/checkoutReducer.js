import * as actionTypes from './actionConstants';
import * as helper from './contextUtility';

const checkoutDataStateReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_ADD:
            return helper.addProductIntoCart(state, action);
        case actionTypes.PRODUCT_REMOVE:
            return helper.removeProductFromCart(state, action);
        case actionTypes.PRODUCT_ITEM_INCREMENT:
            return helper.updateProductQuantity(state, action);
        case actionTypes.PRODUCT_ITEM_DECREMENT:
            return helper.updateProductQuantity(state, action);
        default:
            return state;
    }
};

export default checkoutDataStateReducer;