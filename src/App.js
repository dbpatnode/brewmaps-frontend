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
    notes: [],
    inputValue: "",
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
          console.log("here", breweries);
          if (!breweries.error) {
            this.setState(
              {
                allBreweries: breweries,
                breweries: breweries,
              },
              () => {
                console.log("from component did mount", this.state);
              }
            );
          } else {
            alert(breweries.error);
          }
          // });
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
    localStorage.clear();
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
      notes: user.notes,
    });
    console.log("USER HERE", user);
  };

  addFavorite = (e, brewery) => {
    // debugger;
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
            favorites: [
              ...this.state.favorites,
              { id: data.id, brewery: data.brewery },
            ],
          });
          window.location.href = "/favorites";
        });
    }
  };

  addNotes = (e, brewery) => {
    // debugger;
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
      fetch("http://localhost:3000/notes", configObj)
        .then((resp) => resp.json())
        .then((data) => {
          this.setState({
            favorites: [
              ...this.state.notes,
              { id: data.id, brewery: data.brewery },
            ],
          });
          window.location.href = "/favorites";
        });
    }
  };

  breweryFilterOnChange = (e) => {
    console.log("hi from onChange", e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
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
                user={this.state.user}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                addNotes={this.addNotes}
                notes={this.state.notes}
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
              const breweries = this.state.breweries;
              const filteredBreweries = breweries.filter((brewery) => {
                return brewery.brewery_name
                  .toLowerCase()
                  .includes(this.state.inputValue.toLowerCase());
              });
              // console.log("breweries from app", breweries);
              return breweries ? (
                <BreweryCollection
                  {...props}
                  breweries={breweries}
                  filteredBreweries={filteredBreweries}
                  inputValue={this.state.inputValue}
                  breweryFilterOnChange={this.breweryFilterOnChange}
                  addFavorite={this.addFavorite}
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
