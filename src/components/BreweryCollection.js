import React from 'react';
import { beer, map } from '../SVGs/svg';
// import { beer, phone, map } from '../SVGs/svg';

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
          const {
            id,
            website_url,
            brewery_name,
            brewery_type,
            street,
            city,
            state,
            postal_code,
          } = brewery;
          return (
            <div key={id} className='row'>
              {/* {console.log(brewery)} */}
              <div className='card' brewery={brewery}>
                <div id='brewery-card-info'>
                  <span>
                    <a
                      className='brewery-name'
                      style={{ display: 'table-cell' }}
                      href={website_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {brewery_name}
                    </a>
                  </span>
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
