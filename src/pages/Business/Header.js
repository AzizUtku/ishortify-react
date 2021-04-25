import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import { logout } from '../../store/actions';

const Topbar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    menu: false,
  });
  const handleLogout = () => {
    dispatch(logout());
  };

  const toggle = () => {
    setState((prevState) => ({
      menu: !prevState.menu,
    }));
  };

  return (
    <>
      <div className="header-area">
        <Row >
          <div className="col-md-6 user-dropdown">
                <Dropdown isOpen={state.menu} toggle={toggle} tag="div">
                  <DropdownToggle className="btn dropdown-toggle" tag="div">
                    <span className="d_none_sm">
                      Aysegul <i className="ti-angle-down" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem tag="a" href="#">
                      <i className="ti-user" /> Profile
                    </DropdownItem>
                    <DropdownItem tag="a" href="#">
                      <i className="ti-settings" /> Account Settings
                    </DropdownItem>
                    <span role="separator" className="divider" />
                    <DropdownItem tag="a" className="text-danger" onClick={handleLogout}>
                      <i className="ti-power-off" />
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Topbar;
