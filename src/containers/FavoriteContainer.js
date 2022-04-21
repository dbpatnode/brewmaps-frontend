import React, { Component } from 'react';
import Note from './NoteContainer';
import { phone, map, globe, pencil, trash, star } from '../SVGs/svg';

class FavoriteContainer extends Component {
  removeFavorite = (id) => {
    const favoriteId = this.props.favorites.find((f) => f.brewery.id === id);

    fetch(
      `https://daniels-brewmaps-api.herokuapp.com/favorites/${favoriteId.id}`,
      {
        method: 'DELETE',
      },
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    window.location.href = '/favorites';
  };

  render() {
    return (
      <div>
        <h1 className='header'>Favorites</h1>
        <div className='favorite-cards'>
          {this.props.favorites.map((favorite, index) => (
            <div className='row'>
              <div className='card' index={index} key={index}>
                <a
                  className='brewery-name'
                  style={{ display: 'table-cell' }}
                  href={favorite.brewery.website_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {favorite.brewery.brewery_name}
                </a>

                <h6>Brewery Style: {favorite.brewery.brewery_type}</h6>
                <p>
                  <span id='icons'>{map}</span>
                  <a
                    href={`https://maps.google.com/?q=${favorite.brewery.street},${favorite.brewery.city},${favorite.brewery.state}`}
                    className='address'
                    target='popup'
                    onClick="window.open('../html-link.htm','name','width=600,height=400')"
                  >
                    {favorite.brewery.street} {favorite.brewery.city},{' '}
                    {favorite.brewery.state} {favorite.brewery.postal_code}
                  </a>
                </p>
                <a
                  href={`tel:${favorite.brewery.phone}`}
                  className='phone-number'
                >
                  <span id='icons'>{phone}</span>

                  {''}
                  {favorite.brewery.phone.length > 0
                    ? favorite.brewery.phone
                    : 'No phone number available'}
                </a>

                <a
                  className='website'
                  style={{ display: 'table-cell' }}
                  href={favorite.brewery.website_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span id='icons'>{globe}</span>
                  {favorite.brewery.website_url}
                </a>

                {favorite.brewery.notes.map((note) => (
                  <div className='favorite-notes'>
                    <span id='rendered-notes'>previous review:</span>
                    {note.review}
                    <br />
                    {note.rating} <span id='icons'>{star}</span>
                  </div>
                ))}

                <Note
                  pencil={pencil}
                  addNotes={this.props.addNotes}
                  brewery={favorite.brewery.id}
                  user={this.props.user.id}
                ></Note>

                <button
                  className='submit'
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
