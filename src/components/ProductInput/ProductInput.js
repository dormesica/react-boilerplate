import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductInput.css';

const defaultState = {
    name: '',
    price: 0,
};

class ProductInput extends Component {
    constructor(props) {
        super(props);

        this.state = { ...defaultState };

        this._onNameChange = this._onNameChange.bind(this);
        this._onPriceChange = this._onPriceChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {
        return (
            <div className="ProductInput-container">
                <input
                    className="ProductInput-input"
                    placeholder="Name"
                    type="text"
                    value={this.state.name}
                    onChange={this._onNameChange}
                />
                <input
                    className="ProductInput-input"
                    placeholder="Price"
                    type="number"
                    value={this.state.price}
                    onChange={this._onPriceChange}
                />
                <button className="ProductInput-submit" onClick={this._onSubmit}>
                    Add
                </button>
            </div>
        );
    }

    _onNameChange({ target: { value: name } }) {
        this.setState({ name });
    }

    _onPriceChange({ target: { value } }) {
        this.setState({ price: Number(value) });
    }

    _onSubmit() {
        this.props.addProduct(this.state.name, this.state.price);
        this.setState({ ...defaultState });
    }
}

ProductInput.propTypes = {
    addProduct: PropTypes.func.isRequired,
};

export default ProductInput;
