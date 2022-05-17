import React from 'react';
import { NavLink } from 'react-router-dom';

const WebNav = ({ loggedInStatus, user, handleLogout }) => {
  const logo = './images/hop_logo.png';

  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <span>
          <img className='logo' src={logo} alt='BrewMaps Logo' />
        </span>
        <span>
          <NavLink to='/' className='logo-link'>
            BREWMAPS
          </NavLink>
        </span>
      </div>

      {loggedInStatus === 'LOGGED_IN' && (
        <div className='right-nav'>
          <NavLink to='/map'> BREWERYMAP </NavLink>
          <NavLink to='/breweries'> BREWERIES </NavLink>
          <NavLink to='/favorites'> FAVORITES</NavLink>

          <button class='logout-button' onClick={handleLogout}>
            <span class='text'> Cheers, {user.username}</span>
            <span>Log Out</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default WebNav;
