/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const propTypes = {
  type: PropTypes.string,
};

const defaultProps = {
  type: '',
};


const Container = (props) => {
  const { children, type, className } = props;
  return (
    <div className={`container-lg ${type} ${className}`}>
      {children}
    </div>
  );
};


Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
