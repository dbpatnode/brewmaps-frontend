import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const logo = './images/hop_logo.png';

const NavBar = ({ loggedInStatus, user, handleLogout }) => {
  return (
    <div className='navbar'>
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <img
              className='navbar-brand logo'
              src={logo}
              alt='beer map logo'
            ></img>
            BREWMAPS
          </div>
          {loggedInStatus === 'LOGGED_IN' && (
            <div>
              <b>Cheers, {user.username}!</b>
              <NavLink to='/map'> BREWERYMAP </NavLink>
              <NavLink to='/breweries'> BREWERIES </NavLink>
              <NavLink to='/favorites'> FAVORITES</NavLink>
              <a id='logout' href='/' onClick={handleLogout}>
                LOGOUT
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
