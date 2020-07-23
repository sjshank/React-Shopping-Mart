import React, { useContext } from 'react';
import { CheckoutContext } from '../../../context/checkoutContext';
import { Table } from 'react-bootstrap';
import CheckoutSummaryItem from './CheckoutSummaryItem/checkoutSummaryItem';

const CheckoutSummary = (props) => {
    const checkoutContext = useContext(CheckoutContext);
    const { checkoutProducts } = checkoutContext;

    return (
        <div className="row">
            <div className="col-12">
                <Table striped bordered hover variant="dark" responsive="sm md lg">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkoutProducts.length > 0 &&
                            checkoutProducts.map((cProd) => {
                                return <CheckoutSummaryItem key={cProd.id} product={cProd}></CheckoutSummaryItem>
                            })
                        }
                        {checkoutProducts.length < 1 &&
                            <tr>
                                <td colSpan="3">No record found.</td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default CheckoutSummary;