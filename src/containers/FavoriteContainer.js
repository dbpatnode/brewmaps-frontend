import React, { Component } from "react";
import Note from "./NoteContainer";

class FavoriteContainer extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

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
    const notes = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-chat-left-text"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          fill-rule="evenodd"
          d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    );
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
        <h1 className="header">Favorites</h1>
        <div className="cards">
          {this.props.favorites.map((favorite) => (
            <div clasName="row">
              <div className="card">
                <a
                  className="website"
                  style={{ display: "table-cell" }}
                  href={favorite.brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {favorite.brewery.brewery_name}
                </a>

                <h6>Brewery Style: {favorite.brewery.brewery_type}</h6>
                <p>
                  {favorite.brewery.street} <br />
                  {favorite.brewery.city}, {favorite.brewery.state}{" "}
                  {favorite.brewery.postal_code}
                </p>
                <a
                  href={`tel:${favorite.brewery.phone}`}
                  className="phone-number"
                >
                  {""}
                  {favorite.brewery.phone.length > 0
                    ? favorite.brewery.phone
                    : "No phone number available"}
                </a>
                {this.state.on && <Note></Note>}
                <button onClick={this.toggle}>{notes}</button>
                <br />

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
      </div>
    );
  }
}

export default FavoriteContainer;
