import React from 'react';
import useWindowSize from '../../helpers/useWindowSize';
import WebNav from './WebNav';

const NavBar = ({ loggedInStatus, user, handleLogout }) => {
  const width = useWindowSize().width;

  return (
    <div>
      {width < 1024 ? (
        <></>
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
