import React from 'react';
import PropTypes from 'prop-types';
import '../../src/style/alert.css';

const Alert = ({ message, success }) => (
  <div className={`alert${success ? ' success' : ''}`}>
    {message}
  </div>
);

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};


export default Alert;
