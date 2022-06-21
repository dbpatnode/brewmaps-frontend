import React from "react";
import NoteContainer from "../Notes/NotesContainer";
import {
  phone as phoneIcon,
  map,
  globe,
  pencil,
  trash,
  star,
} from "../../SVGs/svg";

const FavoriteContainer = ({ user, favorites, setFavorites, notes }) => {
  const addNotes = (note) => {
    console.log("note: ", note);

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.authToken,
      },
      body: JSON.stringify(note),
    };

    fetch("https://daniels-brewmaps-api.herokuapp.com/notes", configObj)
      .then((resp) => resp.json())
      .then((data) => {
        const duplicatedFavorites = [...favorites];

        // find w/in favorites find matching brewery id that note contains
        const foundFavorite = duplicatedFavorites.find((favorite) => {
          return favorite.brewery.id === note.brewery_id;
        });

        // wont always do a .push
        foundFavorite.brewery.notes.push(data);

        setFavorites(duplicatedFavorites);
      });
  };

  const removeFavorite = (id) => {
    const favoriteId = favorites.find((f) => f.brewery.id === id);

    fetch(
      `https://daniels-brewmaps-api.herokuapp.com/favorites/${favoriteId.id}`,
      {
        method: "DELETE",
      },
    )
      .then((resp) => resp.json())
      .then((data) => (window.location.href = "/favorites"));
  };

  return (
    <div className='top-margin'>
      <h1 className='header'>Favorites</h1>
      <div className='favorite-cards'>
        {favorites.map((favorite, index) => {
          const { id } = favorite;
          const {
            website_url,
            brewery_name,
            brewery_type,
            street,
            city,
            state,
            postal_code,
            phone,
          } = favorite.brewery;

          return (
            <div key={id} className='row'>
              <div className='card' index={index} key={index}>
                <a
                  className='brewery-name'
                  style={{ display: "table-cell" }}
                  href={website_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {brewery_name}
                </a>

                <h6>Brewery Style: {brewery_type}</h6>
                <p>
                  <span id='icons'>{map}</span>
                  <a
                    href={`https://maps.google.com/?q=${street},${city},${state}`}
                    className='address'
                    target='popup'
                  >
                    {street} {city}, {state} {postal_code}
                  </a>
                </p>

                {""}
                {favorite.brewery.phone ? (
                  <a href={`tel:${phone}`} className='phone-number'>
                    <span id='icons'>{phoneIcon}</span>
                    {favorite.brewery.phone}
                  </a>
                ) : (
                  "No phone number available"
                )}

                <a
                  className='website'
                  style={{ display: "table-cell" }}
                  href={favorite.brewery.website_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span id='icons'>{globe}</span>
                  {website_url}
                </a>

                <div>
                  <button
                    className='submit'
                    id={favorite.brewery.id}
                    onClick={() => removeFavorite(favorite.brewery.id)}
                  >
                    {trash}
                  </button>

                  <NoteContainer
                    pencil={pencil}
                    addNotes={addNotes}
                    brewery={favorite.brewery.id}
                    user={user.id}
                  />
                </div>
              </div>

              {favorite.brewery.notes.reverse().map((note) => {
                const { id, review, rating } = note;
                return (
                  <div key={id} className='favorite-notes'>
                    <span id='rendered-notes'>previous review:</span>
                    {review}
                    <br />
                    {rating} <span id='icons'>{star}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteContainer;
