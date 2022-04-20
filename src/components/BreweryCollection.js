import React from 'react';
import { beer, phone, map } from '../SVGs/svg';

const BreweryCollection = (props) => {
  return (
    <div>
      <h1 className='header'>Breweries</h1>
      <div className='search__container'>
        <input
          className='search__input'
          type='text'
          placeholder='search...'
          value={props.inputValue}
          onChange={props.breweryFilterOnChange}
        />
      </div>

      <div className='cards'>
        {props.filteredBreweries.map((brewery) => {
          return (
            <div className='row'>
              <div className='card' brewery={brewery} key={brewery.id}>
                <div id='brewery-card-info'>
                  <span>
                    <a
                      className='brewery-name'
                      style={{ display: 'table-cell' }}
                      href={brewery.website_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {brewery.brewery_name}
                    </a>
                  </span>
                  <h6>Brewery Style: {brewery.brewery_type}</h6>
                  <p>
                    <span id='icons'>{map}</span>
                    <a
                      href={`https://maps.google.com/?q=${brewery.street},${brewery.city},${brewery.state}`}
                      className='address'
                      target='popup'
                      onClick="window.open('../html-link.htm','name','width=600,height=400')"
                    >
                      {brewery.street} {brewery.city}, {brewery.state}{' '}
                      {brewery.postal_code}
                    </a>
                  </p>

                  {/* <span id='icons'>{phone}</span> */}
                  {''}
                  {parseInt(brewery.phone).length > 0 ? (
                    <p>'No phone number available'</p>
                  ) : (
                    <a href={`tel:${brewery.phone}`} className='phone-number'>
                      {brewery.phone}
                    </a>
                  )}
                  {/* {brewery.phone} */}
                </div>

                <button
                  brewery={brewery}
                  id={brewery.id}
                  className={
                    props.favorites.some(
                      (b) => b.brewery.brewery_name === brewery.brewery_name,
                    )
                      ? 'submit yellow'
                      : 'submit red'
                  }
                  onClick={(e) => props.addFavorite(e, brewery)}
                >
                  {beer}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BreweryCollection;
