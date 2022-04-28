import React, { useState } from 'react';
import Login from '../auth/Login';
import Registration from '../auth/Registration';

const NotSignedInHome = ({ handleLogin, history }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='home-content'>
      <div className='wrapper'>
        <span className='home-upper-left'>
          <div>
            <h1>BREWMAPS:</h1>
            <h2>Your</h2>
            <h2>Brewery</h2>
            <h2>Wish List</h2>
          </div>
        </span>
        <span className='home-upper-right'>
          {!toggle ? (
            <div className='registration-container'>
              <Login handleLogin={handleLogin} history={history} />
              <span className='toggle-message'>
                <p>
                  Don't have an account yet? Sign up{' '}
                  <button onClick={handleToggle}>here</button>.
                </p>
              </span>
            </div>
          ) : (
            <div className='registration-container'>
              <Registration handleLogin={handleLogin} history={history} />
              <span className='toggle-message'>
                Have an account already? Login{' '}
                <button onClick={handleToggle}>here</button>.
              </span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default NotSignedInHome;
