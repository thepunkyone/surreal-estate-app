import React, { Fragment, Component } from 'react';

class Alert extends Component {
  constructor(message, success) {
    super();
    this.message = message;
    this.success = success;
  }

  render() {
    return <div className="alert" message={this.props.message} success={this.props.success}>{this.props.message}</div>;
  }
}

Alert.defaultProps = {
  message: 'Error!',
  success: false,
};


export default Alert;
