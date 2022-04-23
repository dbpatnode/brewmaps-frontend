import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { beer, phone as phoneIcon, map, globe } from '../../SVGs/svg';

class BreweryShowPage extends Component {
  render() {
    const {
      brewery_name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
      website_url,
      phone,
    } = this.props.brewery;

    return (
      <div>
        <div className='single-card-layout'>
          <div className='single-card'>
            <span>
              <a
                className='brewery-name'
                style={{ display: 'table-cell' }}
                href={website_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h1>{brewery_name}</h1>
              </a>
            </span>

            <h3>Brewery Style: {brewery_type}</h3>
            <p>
              <span id='icons'>{map}</span>
              {street}
              {city}, {state} {postal_code}
            </p>

            <a href={`tel:${phone}`} className='phone-number'>
              <span id='icons'>{phoneIcon}</span>
              {phone}
            </a>
            <br />

            <span>
              <a
                className='website'
                style={{ display: 'table-cell' }}
                href={website_url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span id='icons'>{globe}</span>
                {website_url}
              </a>
            </span>

            <button
              // className="submit"
              className={
                this.props.favorites.some(
                  (b) => b.brewery.brewery_name === brewery_name,
                )
                  ? 'submit yellow'
                  : 'submit red'
              }
              onClick={(e) => this.props.addFavorite(e, this.props.brewery)}
            >
              {beer}
            </button>
          </div>
          <br />
        </div>
        <Link to='/map'>
          <button className='brewery-card-button'>Back to map</button>
        </Link>
      </div>
    );
  }
}

export default BreweryShowPage;
