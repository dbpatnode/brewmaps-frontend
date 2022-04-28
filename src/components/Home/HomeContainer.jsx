import React from 'react';
import NotSignedInHome from './NotSignedInHome';
import SignedInHome from './SignedInHome';

const HomeContainer = ({ handleLogin, history }) => {
  return (
    <div className='Home-container'>
      <div className='Home-top'>
        {console.log(localStorage.authToken)}
        {localStorage.authToken !== undefined ? (
          <SignedInHome />
        ) : (
          <NotSignedInHome handleLogin={handleLogin} history={history} />
        )}
      </div>
      <span className='bottom'>
        <img src='./images/home_page_botom.png' alt='' />
      </span>
    </div>
  );
};

export default HomeContainer;
