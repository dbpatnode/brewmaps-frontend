import React, { Component } from "react";

class FavoriteContainer extends Component {
  removeFavorite = (id) => {
    const favoriteId = this.props.favorites.find((f) => f.brewery.id === id);

    fetch(`http://localhost:3000/favorites/${favoriteId.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    window.location.href = "/favorites";
  };

  render() {
    const trash = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-trash"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    );
    return (
      <div>
        <legend className="header">Favorites</legend>
        {this.props.favorites.map((favorite) => (
          <div clasName="row">
            <div className="card">
              <h4>{favorite.brewery.brewery_name}</h4>
              <h3>Brewery Style: {favorite.brewery.brewery_type}</h3>
              <p>
                {favorite.brewery.street} <br />
                {favorite.brewery.city}, {favorite.brewery.state}{" "}
                {favorite.brewery.postal_code}
              </p>
              <button
                className="submit"
                id={favorite.brewery.id}
                onClick={() => this.removeFavorite(favorite.brewery.id)}
              >
                {trash}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FavoriteContainer;
