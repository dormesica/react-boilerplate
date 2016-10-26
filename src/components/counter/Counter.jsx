import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddButton from './AddButton/AddButton';
import SubtractButton from './SubtractButton/SubtractButton';
import * as counterActions from '../../actions/counter.action';


export class Counter extends Component {
    constructor() {
        super();

        this._onAddClick = this._onAddClick.bind(this);
        this._onSubtractClick = this._onSubtractClick.bind(this);
    }

    _onAddClick() {
        this.props.dispatch(counterActions.addAction(1));
    }

    _onSubtractClick() {
        this.props.dispatch(counterActions.subtractAction(1));
    }

    render() {
        return (
            <div>
                <span>
                    {'Counter: ' + this.props.count}
                </span>
                <div>
                    <AddButton onClick={this._onAddClick}/>
                    <SubtractButton onClick={this._onSubtractClick}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.example.get('count')
    };
}
const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
