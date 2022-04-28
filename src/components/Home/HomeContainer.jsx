import React from 'react';
import NotSignedInHome from './NotSignedInHome';
import SignedInHome from './SignedInHome';
import useWindowSize from '../../helpers/useWindowSize';

const HomeContainer = ({ handleLogin, history }) => {
  const width = useWindowSize().width;
  return (
    <div className={width < 600 ? 'Mobile-home-container' : 'Home-container'}>
      <div className='Home-top'>
        {localStorage.authToken !== undefined ? (
          <SignedInHome />
        ) : (
          <NotSignedInHome handleLogin={handleLogin} history={history} />
        )}
      </div>
      <span className='bottom'>
        <div>
          <img src='./images/home_page_botom.png' alt='' />
        </div>
      </span>
    </div>
  );
};

export default HomeContainer;
