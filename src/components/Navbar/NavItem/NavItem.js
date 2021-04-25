/* eslint-disable react/prop-types */
import React from 'react';
import './NavItem.scss';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  isButton: false,
  onClick: () => {},
};

const NavItem = (props) => {
  const {
    title, pathName, isButton, onClick,
  } = props;
  return (
    <li className={isButton ? 'nav-item button' : 'nav-item'}>
      <NavLink
        onClick={onClick}
        isActive={
            (match, location) => {
              if (!location) return false;
              const { pathname } = location;
              return pathname === pathName;
            }
        }
        activeClassName="active"
        to={{
          pathname: pathName,
        }}
      >
        {title}
      </NavLink>
    </li>

  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default withRouter(NavItem);
