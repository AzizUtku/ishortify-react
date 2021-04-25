/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-x';
import { TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import Logo from '../../assets/images/logo.svg';
import * as actions from '../../store/actions';
import NavItem from './NavItem/NavItem';
import './Navbar.scss';


const propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  type: '',
};

class Navbar extends React.Component {
  state = {
    showOptions: false,
  }

  render() {
    const { links } = this.props;

    return (
      <nav className="navbar navbar-light navbar-expand-lg bg-custom">
        <NavLink className="navbar-brand" to="/"><img className="logo-img" src={Logo} height="40px" alt="logo" />  iShortify</NavLink>
        <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <ul className="navbar-nav ml-auto">
            {links.map(link => (
              <NavItem
                key={link.key}
                title={link.title}
                pathName={link.pathName}
                isButton={link.isButton}
                onClick={link.onClick}
              />
            ))}
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {links.map(link => (
              <NavItem
                key={link.key}
                title={link.title}
                pathName={link.pathName}
                isButton={link.isButton}
                onClick={link.onClick}
              />
            ))}
          </ul>
        </div>
      </nav>

    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
