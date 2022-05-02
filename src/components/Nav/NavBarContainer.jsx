import React from 'react';
import useWindowSize from '../../helpers/useWindowSize';
import WebNav from './WebNav';
import MobileNav from './MobileNav';

const NavBar = ({ loggedInStatus, user, handleLogout }) => {
  const width = useWindowSize().width;

  return (
    <div>
      {width < 1024 ? (
        <MobileNav
          loggedInStatus={loggedInStatus}
          user={user}
          handleLogout={handleLogout}
        />
      ) : (
        <WebNav
          loggedInStatus={loggedInStatus}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default NavBar;
