import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductListItem.css';

class ProductListItem extends Component {
    render() {
        return (
            <div className={`${this.props.className} ProductItem-container`}>
                <span>{this.props.name}</span>
                <span>{this.props.price}$</span>
            </div>
        );
    }
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default ProductListItem;
