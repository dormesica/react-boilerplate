import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ProductInput.css';
import ErrorMessage from '../common/ErrorMessage';

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
        const { error, name, price } = this.state;

        return (
            <React.Fragment>
                <div className="ProductInput-container">
                    <input
                        className="ProductInput-input"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={this._onNameChange}
                    />
                    <input
                        className="ProductInput-input"
                        placeholder="Price"
                        type="number"
                        value={price}
                        onChange={this._onPriceChange}
                    />
                    <button className="ProductInput-submit" onClick={this._onSubmit}>
                        Add
                    </button>
                </div>
                {error ? <ErrorMessage message={error} /> : null}
            </React.Fragment>
        );
    }

    _onNameChange({ target: { value: name } }) {
        this.setState({ name, error: undefined });
    }

    _onPriceChange({ target: { value } }) {
        this.setState({ price: Number(value), error: undefined });
    }

    _onSubmit() {
        const { name, price } = this.state;
        if (!name || price <= 0) {
            return this.setState({ error: 'Missing properties' });
        }

        this.props.addProduct(this.state.name, this.state.price);
        this.setState({ ...defaultState });
    }
}

ProductInput.propTypes = {
    addProduct: PropTypes.func.isRequired,
};

export default ProductInput;
