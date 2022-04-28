import React from 'react';
import NotSignedInHome from './NotSignedInHome';
import SignedInHome from './SignedInHome';

const HomeContainer = ({ handleLogin, history }) => {
  return (
    <div className='Home'>
      {localStorage.length !== 0 ? (
        <SignedInHome />
      ) : (
        <NotSignedInHome handleLogin={handleLogin} history={history} />
      )}
    </div>
  );
};

export default HomeContainer;
