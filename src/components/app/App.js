import React, { Component } from 'react';

import ProductList from '../../containers/ProductsList';
import ProductInput from '../../containers/ProductInput';
import logo from '../../assets/logo.svg';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                <ProductInput />
                <ProductList />
            </div>
        );
    }
}

export default App;
