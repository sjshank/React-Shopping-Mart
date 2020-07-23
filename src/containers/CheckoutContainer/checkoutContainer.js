import React, { useContext } from 'react';
import CheckoutSummary from './CheckoutSummary/checkoutSummary';
import { Button } from 'react-bootstrap';
import { CheckoutContext } from '../../context/checkoutContext';

const CheckoutContainer = (props) => {
    const checkoutContext = useContext(CheckoutContext);
    const { checkoutProducts } = checkoutContext;

    const handleCancelAction = () => {
        props.history.push("/");
    }

    const handlePlaceOrder=()=>{
        alert("Thank You ! Order has been placed successfully.")
    }

    return (
        <div className="container-fluid">
            <h4 className="text-center font-weight-bold mt-3 mb-3">Your Cart Summary</h4>
            <CheckoutSummary></CheckoutSummary>
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <Button className="m-2" variant="dark" onClick={handleCancelAction}>Cancel</Button>
                        <Button className="m-2" variant="dark" onClick={handlePlaceOrder} disabled={checkoutProducts.length < 1}>Place Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutContainer;