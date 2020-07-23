import React, { useContext } from 'react';
import { CheckoutContext } from '../../context/checkoutContext';

const PriceContainer = (props) => {

    const checkoutContext = useContext(CheckoutContext);
    const { totalPrice } = checkoutContext;

    return (
        <div className="container-fluid clearfix">
            <div className="mt-lg-5 pt-lg-3 m-3">
                <div className="row">
                    <h6>Total: $ <span className="total-price-cls">{totalPrice.toFixed(2)}</span></h6>
                    {/* <ul className="d-flex">
                        <li><h6>Final Price:</h6></li>
                        <li className="pr-1 pt-0"> <small>$</small></li>
                        <li className="pt-0"><h2><strong>{totalPrice.toFixed(2)}</strong></h2></li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default PriceContainer;