import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

export const BreweriesContext = createContext(null);

// creates custom provider hook:
export const useBreweriesProvider = () => useContext(BreweriesContext);

// Passes this state to children of provider
const BreweriesProvider = ({ children }) => {
  const [breweries, setBreweries] = useState([]);
  //   const url = 'https://daniels-brewmaps-api.herokuapp.com/breweries';

  useEffect(() => {
    fetch(`https://daniels-brewmaps-api.herokuapp.com/breweries`, {
      'Content-Type': 'application/json',
      Authorization: localStorage.authToken,
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          setBreweries(data);
        } else {
          alert(data.error);
        }
      });
  }, []);

  return (
    <BreweriesContext.Provider value={{ breweries, setBreweries }}>
      {children}
    </BreweriesContext.Provider>
  );
};

export default BreweriesProvider;
