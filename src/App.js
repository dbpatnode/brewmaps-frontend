import React, { useState, useEffect } from 'react';
import { useBreweriesProvider } from './providers/BreweriesProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Nav/NavBar';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import MapContainer from './components/Map/MapContainer';
import Home from './components/Home/HomeContainer';
import FavoriteContainer from './components/Favorites/FavoritesContainer';
import NoteContainer from './components/Notes/NotesContainer';
import Brewery from './components/Brewery/Brewery';
import BreweriesContainer from './components/Breweries/BreweriesContainer';

const App = () => {
  // const [breweries, setBreweries] = useState([]);
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const { breweries } = useBreweriesProvider();
  //   fetch('https://daniels-brewmaps-api.herokuapp.com/breweries', {
  //     'Content-Type': 'application/json',
  //     Authorization: localStorage.authToken,
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       if (!data.error) {
  //         setBreweries(data);
  //       } else {
  //         alert(data.error);
  //       }
  //     });
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

  const handleLogout = () => {
    localStorage.clear();
    setLoggedInStatus('NOT_LOGGED_IN');
    setUser({});
  };

  const handleLogin = (user) => {
    setLoggedInStatus('LOGGED_IN');
    setUser(user);
    setFavorites(user.favorites);
    setNotes(user.notes);
  };

  const addFavorite = (e, brewery) => {
    if (!favorites.includes(brewery)) {
      const configObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.authToken,
        },
        body: JSON.stringify({
          user_id: user.id,
          brewery_id: brewery.id,
        }),
      };
      fetch('https://daniels-brewmaps-api.herokuapp.com/favorites', configObj)
        .then((resp) => resp.json())
        .then((data) => {
          setFavorites([...favorites, { id: data.id, brewery: data.brewery }]);
        });
    }
  };

  const addNotes = (note) => {
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.authToken,
      },
      body: JSON.stringify(note),
    };
    fetch('https://daniels-brewmaps-api.herokuapp.com/notes', configObj)
      .then((resp) => resp.json())
      .then((data) => {
        window.location.href = '/favorites';
      });
  };

  const breweryFilterOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <Router>
      <div>
        <Route
          path='/'
          render={(props) => (
            <NavBar
              {...props}
              user={user}
              loggedInStatus={loggedInStatus}
              handleLogout={handleLogout}
            />
          )}
        />

        <Route
          exact
          path='/'
          render={(props) => (
            <Home
              {...props}
              history={props.history}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />

        <Route
          path='/signup'
          render={(props) => (
            <Registration
              {...props}
              // history={props.history}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />

        <Route
          path='/login'
          render={(props) => (
            <Login
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />

        <Route
          path='/map'
          render={(props) => {
            return breweries ? (
              <MapContainer
                breweries={breweries}
                {...props}
                favorites={favorites}
                user={user}
                addFavorite={addFavorite}
              />
            ) : (
              <div className='loading'>'Loading...'</div>
            );
          }}
        />

        <Route
          path='/favorites'
          render={(props) => (
            <FavoriteContainer
              {...props}
              user={user}
              favorites={favorites}
              addFavorite={addFavorite}
              // removeFavorite={removeFavorite}
              addNotes={addNotes}
              notes={notes}
            />
          )}
        />

        <Route path='/notes' render={(props) => <NoteContainer {...props} />} />

        <Route
          path='/brewery/:BreweryId'
          render={(props) => {
            const BreweryId = props.match.params.BreweryId;
            const brewery = breweries.find((e) => e.id === parseInt(BreweryId));

            return brewery ? (
              <Brewery
                brewery={brewery}
                {...props}
                favorites={favorites}
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
                addFavorite={addFavorite}
              />
            ) : (
              <div className='loading'>'Loading...'</div>
            );
          }}
        />

        <Route
          path='/breweries'
          render={(props) => {
            // const breweries = breweries;
            const filteredBreweries = breweries.filter((brewery) => {
              return brewery.brewery_name
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            });
            return breweries ? (
              <BreweriesContainer
                {...props}
                favorites={favorites}
                breweries={breweries}
                filteredBreweries={filteredBreweries}
                inputValue={inputValue}
                breweryFilterOnChange={breweryFilterOnChange}
                addFavorite={addFavorite}
              />
            ) : (
              <div className='loading'>'Loading...'</div>
            );
          }}
        />
      </div>
    </Router>
  );
};

export default App;
