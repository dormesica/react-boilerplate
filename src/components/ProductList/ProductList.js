import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

import './ProductList.css';

class ProductList extends Component {
    render() {
        return (
            <div className="ProductsList-container">
                {this.props.products.map(product => (
                    <ProductItem key={product.name} name={product.name} price={product.price} />
                ))}
            </div>
        );
    }
}

// ProductList.propTypes = {
//     products: PropTypes.arrayOf([
//         PropTypes.objectOf({
//             name: PropTypes.string.isRequired,
//             price: PropTypes.number.isRequired,
//         }),
//     ]).isRequired,
// };

export default ProductList;