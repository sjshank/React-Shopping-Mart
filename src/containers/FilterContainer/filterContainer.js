import React from 'react';
// import SizeFilter from '../../components/SizeFilter/sizeFilter';
import ShippingFilter from '../../components/ShippingFilter/shippingFilter';

const FilterContainer = (props) => {

    return (
        <div className="container-fluid clearfix">
            {/* <SizeFilter></SizeFilter>
            <hr /> */}
            <div className="mt-lg-5 mt-2">
                <ShippingFilter></ShippingFilter>
            </div>
        </div>
    );
};

export default FilterContainer;