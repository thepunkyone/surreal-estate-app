import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  constructor(message, success) {
    super(message, success);
    this.props = {
      message: message,
      success: success,
    };
  }

  render() {
    return <div className="alert" message={this.props.message} success={this.props.success}>{this.props.message}</div>;
  }
}

Alert.defaultProps = {
  message: 'Error!',
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};


export default Alert;
