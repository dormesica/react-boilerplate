import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddButton from './AddButton/AddButton';
import SubtractButton from './SubtractButton/SubtractButton';
import * as counterActions from '../../actions/counter.action';


export class Counter extends Component {
    constructor(props) {
        super(props);

        this.onAddClick = this.onAddClick.bind(this);
        this.onSubtractClick = this.onSubtractClick.bind(this);
    }

    onAddClick() {
        this.props.dispatch(counterActions.addAction(1));
    }

    onSubtractClick() {
        this.props.dispatch(counterActions.subtractAction(1));
    }

    render() {
        return (
            <div>
                <span>
                    {'Counter: ' + this.props.count}
                </span>
                <div>
                    <AddButton onClick={this.onAddClick}/>
                    <SubtractButton onClick={this.onSubtractClick}/>
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
