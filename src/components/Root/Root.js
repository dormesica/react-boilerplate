import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from '../App';
import store from '../../store';

// ----------------------------------------------------------------------------
// NOTE: this file should not be changed unless the changes regard the entire
// application, like adding a provider.
// In order to edit the application change the App component in:
// src/components/App/App.js
// ----------------------------------------------------------------------------

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
