import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Login from "./components/auth/Login.js";
import Registration from "./components/auth/Registration.js";
import MapContainer from "./containers/MapContainer.js";
import Home from "./components/Home";
import FavoriteContainer from "./containers/FavoriteContainer.js";
import NoteContainer from "./containers/NoteContainer.js";
import IndividualBreweryShowPage from "./components/BreweryShowPage";
import BreweryCollection from "./components/BreweryCollection";

class App extends Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
    breweries: [],
    allBreweries: [],
    favorites: [],
  };

  componentDidMount() {
    if (!localStorage.getItem("allBreweries")) {
      const configObj = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.authToken,
        },
      };
      fetch("http://localhost:3000/breweries", configObj)
        .then((resp) => resp.json())
        .then((breweries) => {
          this.setState({
            allBreweries: breweries,
            breweries: breweries,
          });
          localStorage.setItem("allBreweries", JSON.stringify(breweries));
        });
    }

    if (localStorage.getItem("allBreweries")) {
      this.setState({
        breweries: JSON.parse(localStorage.getItem("allBreweries")),
      });
    }

    const token = localStorage.getItem("authToken");
    if (token) {
      console.log(token);
      const configObj = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.authToken,
        },
      };

      this.setState({ loggedInStatus: "LOGGED_IN" });
      fetch("http://localhost:3000/whoami", configObj)
        .then((resp) => resp.json())
        .then(this.handleLogin);
    } else {
      this.setState({ loggedInStatus: "NOT_LOGGED_IN" });
    }
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  };

  handleLogin = (user) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: user,
      favorites: user.favorites,
    });
    console.log("handle log in", this.state);
  };

  addFavorite = (brewery) => {
    if (!this.state.favorites.includes(brewery)) {
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.authToken,
        },
        body: JSON.stringify({
          user_id: this.state.user.id,
          brewery_id: brewery.id,
        }),
      };
      fetch("http://localhost:3000/favorites", configObj)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data.brewery);
          this.setState({
            favorites: [...this.state.favorites, { brewery: data.brewery }],
          });
        });
    }
  };

  removeFavorite = (brewery) => {
    let newFavorites = this.state.favorites.filter(
      (favoritedBrewery) => favoritedBrewery !== brewery
    );
    this.setState({ favorites: newFavorites });
  };

  handleRemove = (id) => {
    console.log("id", id);
    this.state.breweries.filter((brewery) => {
      return brewery.id !== id;
    });
  };

  render() {
    console.log("state from app.js", this.state);
    return (
      <Router>
        <div>
          <Route
            path="/"
            render={(props) => (
              <NavBar
                {...props}
                user={this.state.user}
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                handleLogout={this.handleLogout}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route
            path="/signup"
            render={(props) => (
              <Registration
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route
            path="/map"
            render={(props) => {
              const breweries = this.state.breweries;
              return breweries ? (
                <MapContainer
                  breweries={breweries}
                  {...props}
                  user={this.state.user}
                  addFavorite={this.addFavorite}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              ) : (
                "Loading..."
              );
            }}
          />

          <Route
            path="/favorites"
            render={(props) => (
              <FavoriteContainer
                {...props}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route
            path="/notes"
            render={(props) => (
              <NoteContainer
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />

          <Route
            path="/brewery/:BreweryId"
            render={(props) => {
              const BreweryId = props.match.params.BreweryId;
              const brewery = this.state.breweries.find(
                (e) => e.id === parseInt(BreweryId)
              );

              return brewery ? (
                <IndividualBreweryShowPage
                  brewery={brewery}
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  addFavorite={this.addFavorite}
                />
              ) : (
                "Loading..."
              );
            }}
          />

          <Route
            path="/breweries"
            render={(props) => {
              const breweries = this.state.allBreweries;
              return breweries ? (
                <BreweryCollection
                  breweries={breweries}
                  {...props}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              ) : (
                "Loading..."
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
