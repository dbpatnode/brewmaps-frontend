import React from 'react';
import NotSignedInHome from './NotSignedInHome';
import SignedInHome from './SignedInHome';

const HomeContainer = ({ handleLogin, history }) => {
  return (
    <div className='Home'>
      {localStorage.length === 0 ? (
        <NotSignedInHome handleLogin={handleLogin} history={history} />
      ) : (
        <SignedInHome />
      )}
    </div>
  );
};

export default HomeContainer;
