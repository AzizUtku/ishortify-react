/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './Showcase.scss';

const propTypes = {
  isImageLeft: PropTypes.boolean,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageIndex: PropTypes.number.isRequired,
  hasButton: PropTypes.boolean,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
};

const defaultProps = {
  isImageLeft: false,
  hasButton: false,
  buttonText: '',
  buttonAction: {},
};

const Showcase = (props) => {
  const {
    title, image, children,
  } = props;

  return (
    <div className="Showcase">
      <div className="row justify-content-between showcase-inner">
        <Fade top>
          <div key="image" className="col-lg-12 col-md-12 showcase-img">
            <img className="img-fluid" src={image} alt="showcase" />
          </div>
        </Fade>
        <Fade bottom>
          <div key="text" className="col-lg-12 col-md-12">
            <h1 className="title">{title}</h1>
            { children }
          </div>
        </Fade>
      </div>
    </div>
  );
};

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;
export default Showcase;
