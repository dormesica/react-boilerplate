import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.css';

class ErrorMessage extends Component {
    render() {
        return (
            <span className="ErrorMessage-text">{this.props.message}</span>
        );
    }
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
