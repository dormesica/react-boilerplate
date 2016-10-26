import React, { Component } from 'react';

class SubtractButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Subtrack
            </button>
        );
    }
}

export default SubtractButton;
