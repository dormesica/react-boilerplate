// -----------------------------------------------------------------
// This file contains the "Root" component of the react application.
// The render function of the component returns what one would
//  normally write in the reactDOM.render() function.
// -----------------------------------------------------------------

import React, { Component } from 'react';

import App from './components/App/App';


class Root extends Component {
    render() {
        return (
            <App />
        );
    }
}

export default Root;
