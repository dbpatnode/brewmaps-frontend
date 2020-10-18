import React, { Component } from "react";
import axios from "axios";
// import FavoritesShowPage from "../components/FavoritesShowPage";
// import BreweryShowPageBack from "../components/BreweryShowPageBack";
// import Flippy, { FrontSide, BackSide } from "react-flippy";

class FavoriteContainer extends Component {
  state = {
    favorites: [],
  };
  componentDidMount() {
    const configObj = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.authToken,
      },
    };
    fetch("http://localhost:3000/users", configObj)
      .then((resp) => resp.json())
      .then((users) => {
        console.log("here", this.props.user.id);
        let user = users.filter((user) => user.id === this.props.user.id);
        console.log("user from favcontainer", user);
        this.setState({
          favorites: user.favorites,
        });
      });
  }

  removeFavorite = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
    }).then(
      this.setState({
        favorites: this.state.favorites,
      })
    );
    window.location.href = "/favorites";
  };

  render() {
    // console.log("favorites", this.props.favorites);
    return (
      <div>
        {this.props.favorites.map((favorite) => (
          <div className="favorite card">
            <h4>{favorite.brewery.brewery_name}</h4>
            <h3>Brewery Style: {favorite.brewery.brewery_type}</h3>
            <p>
              {favorite.brewery.street} <br />
              {favorite.brewery.city}, {favorite.brewery.state}{" "}
              {favorite.brewery.postal_code}
            </p>
            <button
              className="brewery-card-button"
              id={favorite.brewery.id}
              onClick={() => this.removeFavorite(favorite.brewery.id)}
              //   onClick={() => this.hi(favorite.brewery.id)}
            >
              Remove Favorite
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default FavoriteContainer;
