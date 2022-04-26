import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ loggedInStatus, user, handleLogout }) => {
  const logo = './images/hop_logo.png';
  console.log(user);

  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <span>
          <img className='logo' src={logo} alt='BrewMaps Logo' />
        </span>
        <span>
          <NavLink to='/'>BREWMAPS</NavLink>
        </span>
        {loggedInStatus === 'LOGGED_IN' && (
          <span className='username'>Cheers, {user.username}!</span>
        )}
      </div>

      {loggedInStatus === 'LOGGED_IN' && (
        <div className='right-nav'>
          <NavLink to='/map'> BREWERYMAP </NavLink>
          <NavLink to='/breweries'> BREWERIES </NavLink>
          <NavLink to='/favorites'> FAVORITES</NavLink>
          <a className='logout' href='/' onClick={handleLogout}>
            LOGOUT
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
