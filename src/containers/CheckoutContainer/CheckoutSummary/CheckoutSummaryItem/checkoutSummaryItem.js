import React, { useContext, useRef } from 'react';
import './checkoutSummaryItem.css';
import { CheckoutContext } from '../../../../context/checkoutContext';

const CheckoutSummaryItem = (props) => {
    const { product } = props;
    const quantityRef = useRef(product.quantity);
    const checkoutContext = useContext(CheckoutContext);
    const { handleProductRemove, handleItemIncrement, handleItemDecrement } = checkoutContext;

    const onIncrement = () => {
        quantityRef.current = quantityRef.current + 1;
        handleItemIncrement(product.id, product.price);
    }

    const onDecrement = () => {
        quantityRef.current = quantityRef.current - 1;
        handleItemDecrement(product.id, product.price);
    }

    const onProductRemove = () => {
        const _totalProductPrice = product.price * product.quantity;
        handleProductRemove(product.id, _totalProductPrice);
    }

    return (
        <tr className="summary-item">
            <td>
                <div>
                    {product.title}<i className="fa fa-trash fa-lg pl-2" aria-hidden="true" title="Remove product" onClick={onProductRemove}></i>
                </div>
            </td>
            <td>{product.currencyFormat}&nbsp;{product.price}</td>
            <td>
                <div className="toggle-quantity">
                    <span className={quantityRef.current > 1 ? "pr-2" : "disable-minus-icon pr-2"}>
                        <i className="fa fa-minus-square fa-lg" aria-hidden="true" title="Reduce" onClick={onDecrement}></i>
                    </span>
                    <span>{product.quantity}</span>
                    <span className="pl-2">
                        <i className="fa fa-plus-square fa-lg" aria-hidden="true" title="Add" onClick={onIncrement}></i>
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default CheckoutSummaryItem;