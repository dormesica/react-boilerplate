import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductListItem from './ProductListItem';

import './ProductList.css';

class ProductList extends Component {
    render() {
        return (
            <div className="ProductList-container">
                <div className="ProductList-title">
                    <span>Name</span>
                    <span>Price</span>
                </div>
                {this.props.products.map(product => (
                    <ProductListItem
                        key={product.name}
                        className="ProductList-item"
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ProductList;
