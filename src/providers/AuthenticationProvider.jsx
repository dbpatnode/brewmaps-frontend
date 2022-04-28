import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

export const AuthenticationContext = createContext(null);

// creates custom provider hook:
export const useAuthenticationProvider = () =>
  useContext(AuthenticationContext);

// Passes this state to children of provider
const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [favorites, setFavorites] = useState([]);

  const url = 'https://daniels-brewmaps-api.herokuapp.com/breweries';

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.authToken,
        },
      };

      setLoggedInStatus('LOGGED_IN');
      fetch('https://daniels-brewmaps-api.herokuapp.com/whoami', configObj)
        .then((resp) => resp.json())
        .then(handleLogin);
    } else {
      setLoggedInStatus('NOT_LOGGED_IN');
    }
  }, []);

  const handleLogin = (user) => {
    setLoggedInStatus('LOGGED_IN');
    setUser(user);
    setFavorites(user.favorites);
    setNotes(user.notes);
  };

  return (
    //   check index.js for where this is being used
    <AuthenticationContext.Provider
      value={{
        user,
        setUser,
        loggedInStatus,
        setLoggedInStatus,
        favorites,
        setFavorites,
        handleLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
