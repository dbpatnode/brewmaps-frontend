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
    const phone = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-telephone"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
    );
    const map = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-map"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
        />
      </svg>
    );

    const globe = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-globe"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
        />
      </svg>
    );
    const notes = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-pencil"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
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
          fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    );
    const star = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-star-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );

    return (
      <div>
        <h1 className="header">Favorites</h1>
        <div className="favorite-cards">
          {this.props.favorites.map((favorite) => (
            <div className="row">
              <div className="card">
                <a
                  className="brewery-name"
                  style={{ display: "table-cell" }}
                  href={favorite.brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {favorite.brewery.brewery_name}
                </a>

                <h6>Brewery Style: {favorite.brewery.brewery_type}</h6>
                <p>
                  <span id="icons">{map}</span>
                  {favorite.brewery.street}
                  {favorite.brewery.city}, {favorite.brewery.state}{" "}
                  {favorite.brewery.postal_code}
                </p>
                <a
                  href={`tel:${favorite.brewery.phone}`}
                  className="phone-number"
                >
                  <span id="icons">{phone}</span>

                  {""}
                  {favorite.brewery.phone.length > 0
                    ? favorite.brewery.phone
                    : "No phone number available"}
                </a>

                <a
                  className="website"
                  style={{ display: "table-cell" }}
                  href={favorite.brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span id="icons">{globe}</span>
                  {favorite.brewery.website_url}
                </a>

                {favorite.brewery.notes.map((note) => (
                  <div className="favorite-notes">
                    <span id="rendered-notes">previous review:</span>
                    {note.review}
                    <br />
                    {note.rating} <span id="icons">{star}</span>
                  </div>
                ))}

                {this.state.on && (
                  <Note
                    addNotes={this.props.addNotes}
                    brewery={favorite.brewery.id}
                    user={this.props.user.id}
                  ></Note>
                )}
                <div className="note-toggle">
                  <button onClick={this.toggle} id="note-button">
                    {notes}
                  </button>
                </div>

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
