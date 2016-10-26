import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Add</button>
        );
    }
}

export default AddButton;
