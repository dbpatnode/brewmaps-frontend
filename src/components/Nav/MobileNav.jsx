import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ loggedInStatus, user, handleLogout }) => {
  const logo = './images/hop_logo.png';
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className='navbar mobile'>
      <div className='left-nav'>
        <span>
          <img className='logo' src={logo} alt='BrewMaps Logo' />
        </span>
        <span>
          <NavLink to='/'>BREWMAPS</NavLink>
        </span>
      </div>

      {loggedInStatus === 'LOGGED_IN' && (
        <div className={isActive ? 'navigation active' : 'navigation'}>
          <div className='ham-btn' onClick={ToggleClass}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className='links'>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/'>Home</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/map'>Map</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/breweries'>Breweries</NavLink>
            </div>
            <div className='link' onClick={ToggleClass}>
              <NavLink to='/favorites'>Favorites</NavLink>
            </div>
            <div className='mobile-logout'>
              <NavLink to='/' onClick={handleLogout}>
                LOG OUT
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
