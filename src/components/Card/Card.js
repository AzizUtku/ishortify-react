import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  title: '',
};

const Card = (props) => {
  const { title, children } = props;

  return (
    <div className="card-general">
      <div className="container">
        <h3>{title}</h3>
        { children }
      </div> 
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
