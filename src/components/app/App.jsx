import React, { Component } from 'react';

import './App.css';
import CounterContainer from '../Counter/Counter'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>DM-React Boilerplate</h1>
                </div>
                <div>
                    <p className="App-body">
                        change the <code>src/App/app.jsx</code> file to get started
                    </p>
                </div>
                <CounterContainer></CounterContainer>
            </div>
        );
    }
}

export default App;
