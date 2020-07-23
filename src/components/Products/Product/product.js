import React, { useContext, useState, useEffect } from 'react';
import './product.css';
import { CheckoutContext } from "../../../context/checkoutContext";

const Product = (props) => {
    const [isProductSelected, setIsProductSelected] = useState(false);
    const checkoutContext = useContext(CheckoutContext);
    const { handleProductAdd, handleProductRemove, checkoutProducts } = checkoutContext;
    const { product } = props;

    useEffect(() => {
        setIsProductSelected(checkoutProducts.some(cProduct => {
            return cProduct.id === product.id;
        }));
    }, []);

    const onProductSelection = () => {
        if (!isProductSelected) {
            handleProductAdd(product);
        } else {
            handleProductRemove(product.id, product.price);
        }
        setIsProductSelected(prevFlag => !prevFlag);
    }

    return (
        <div className="col-lg-4 col-md-4 col-12">
            <div className="card-group p-lg-2 pb-4" onClick={onProductSelection}>
                <div className={isProductSelected ? 'card product-selected-card' : 'card'}>
                    <img className="card-img-top p-1 pt-2" src={product.image} alt="Product" />
                    <div className="card-body p-2 pt-3">
                        <h6 className="card-title">{product.title}</h6>
                        <p className="card-text mb-0 pb-0">{product.style}</p>
                        <hr className="mt-1 mb-1" />
                        <p className="text-center pb-0 mb-0">{product.currencyFormat}
                            <strong className="pl-1">{product.price}</strong>
                            {product.isFreeShipping && <img src="https://cdn2.iconfinder.com/data/icons/black-stroke-labels-2/128/free_shipping_label_delivery-512.png"
                                alt="Free shipping" className="shipping-img-cls ml-3" />}
                            {!product.isFreeShipping && <img src="https://i.ebayimg.com/images/g/cssAAOSwp01ck-80/s-l300.jpg"
                                alt="Free shipping" className="shipping-img-cls ml-3" />}
                        </p>
                    </div>
                    <div className={isProductSelected ? 'card-footer product-selected' : 'card-footer bg-dark'}>
                        <h5 className="add-to-cart-cls">
                            <strong>
                                {!isProductSelected ? 'Add to cart' : 'Remove'}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;