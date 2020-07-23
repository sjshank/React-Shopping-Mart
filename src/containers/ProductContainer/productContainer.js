import React, { useRef, useCallback, useEffect } from 'react';
import Products from '../../components/Products/products';
import * as productActions from "../../store/actions";
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../UI/Spinner/spinner';

const ProductContainer = (props) => {
    const orderByRef = useRef();

    //initializing dispatch so that it connects with store
    const dispatchProductActions = useDispatch();

    //assigning fetchProduct action
    const onInitProducts = useCallback(
        () => dispatchProductActions(productActions.fetchProducts()
        ), [dispatchProductActions]);

    //useSelector to get store value
    const products = useSelector(state => state.product.products);
    const isLoading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);

    //Make call to firebase on comp initialize
    useEffect(() => {
        onInitProducts();
    }, [onInitProducts]);

    const handleOrderBySelection = (e) => {
        const filterCriteria = {
            'filterType': 'orderBy',
            'fieldName': 'price',
            'filterValue': e.target.value
        };
        dispatchProductActions(productActions.filterProducts(filterCriteria));
    }
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="float-left p-lg-2 pt-2 pt-2">
                        <h6 className="text-success pt-2">{products.length}&nbsp;products found</h6>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="float-left float-lg-right p-lg-2 pt-2">
                        <ul className="d-flex p-0 m-0">
                            <li className="p-lg-1 pt-1">
                                <span><strong>Order by</strong>&nbsp;</span>
                            </li>
                            <li>
                                <select ref={orderByRef} defaultValue="" onChange={handleOrderBySelection} className="form-control">
                                    <option value="">Select</option>
                                    <option value="asc">Lowest to Highest</option>
                                    <option value="desc">Highest to Lowest</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {isLoading && <Spinner></Spinner>}
            {error && <div class="p-3 mb-2 bg-danger text-center error-bckgd text-white">Something went wrong ! Please reload the page.</div>}
            <div className="mt-3">
                <Products products={products}></Products>
            </div>
        </div>
    );
};

export default ProductContainer;