import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductItem.css';

class ProductItem extends Component {
    render() {
        return (
            <div className="ProductItem-container">
                <span>{this.props.name}</span>
                <span>{this.props.price}$</span>
            </div>
        );
    }
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductItem;
