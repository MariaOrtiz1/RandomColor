import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{ 
    background: color,
    height: 300,
    width: 300,
    borderRadius: 20
  }}>Hello World!</div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
