import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as productActions from "../../store/actions";

const ShippingFilter = (props) => {

    const radioInputRef = useRef();

    //initializing dispatch so that it connects with store
    const dispatchProductActions = useDispatch();

    useEffect(() => {
        radioInputRef.current.checked = true;
    }, []);

    const handleDeliveryTypeSelection = (e) => {
        const filterCriteria = {
            'filterType': 'deliveryType',
            'fieldName': 'isFreeShipping',
            'filterValue': e.target.value
        };
        dispatchProductActions(productActions.filterProducts(filterCriteria));
    }

    return (
        <div className="p-2 clearfix">
            <div className="row">
                <h5><strong>Delivery Type:</strong></h5>
            </div>
            <div className="row pl-2">
                <div className="col-lg-12 col-md-12 col-sm-4 col-xs-4 p-0 m-0">
                    <ul className="d-flex p-0 mb-1">
                        <li>
                            <input type="radio" ref={radioInputRef} onChange={handleDeliveryTypeSelection} name="deliveryType" value="" />                    </li>
                        <li><span className="pl-1">All</span></li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-4 col-xs-4 p-0 m-0">
                    <ul className="d-flex p-0 mb-1">
                        <li>
                            <input type="radio" onChange={handleDeliveryTypeSelection} className="input-control" name="deliveryType" value="freeShipping" />
                        </li>
                        <li><span className="pl-1">Free Shipping</span></li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-4 col-xs-4 p-0 m-0">
                    <ul className="d-flex p-0 mb-1">
                        <li>
                            <input type="radio" onChange={handleDeliveryTypeSelection} name="deliveryType" value="deliveryCharges" />                    </li>
                        <li><span className="pl-1">Delivery Charges</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ShippingFilter);