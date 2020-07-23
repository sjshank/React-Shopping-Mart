import React, { useContext } from 'react';
import './header.css';
import { CheckoutContext } from '../../context/checkoutContext';
import { withRouter, NavLink } from 'react-router-dom';

const Header = (props) => {
    const checkoutContext = useContext(CheckoutContext);
    const { checkoutProducts } = checkoutContext;
    const handleCheckout = () => {
        props.history.push('/checkout');
    }
    return (
        < nav className="navbar-light header-cls p-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 clearfix">
                        <div className="float-left">
                            <NavLink to="/">
                                <img src="https://img.icons8.com/ios/50/000000/gg.png" className="logo-cls" alt="logo" />
                                <a className="navbar-brand p-1 d-none d-lg-inline-block d-md-inline-block">
                                    <h2>Shopping Mart</h2>
                                </a>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-4 clearfix">
                        <div className="float-right p-1">
                            {props.location.pathname === '/' &&
                                <h5 className={checkoutProducts.length > 0 ? 'pt-2' : 'pt-2 low-opacity'} onClick={handleCheckout}>
                                    <img src="https://image.flaticon.com/icons/svg/263/263142.svg" className="cart-logo-cls" alt="cart" />
                                    <span className="pl-1">Checkout({checkoutProducts.length})</span></h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default withRouter(Header);