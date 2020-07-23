import React from 'react';
import Product from "./Product/product";

const Products = (props) => {
    return (
        <div className="row">
            {props.products.map((product) => {
                return <Product key={product.id} product={product}></Product>
            })}
        </div>
    );
};

export default Products;