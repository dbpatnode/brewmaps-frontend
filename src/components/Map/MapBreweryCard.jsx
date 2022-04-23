import * as React from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { webinfo, beer, phone, globe } from '../../SVGs/svg';

export default class BreweryCard extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.brewery_name}`;
    const website = `${info.website_url}`;
    const phoneNumber = `${info.phone}`;

    return (
      <div className='popup'>
        <div>
          <h4 id='popup-title'>{displayName}</h4>
          <div className='popup-info'>
            <Link
              to={`brewery/${info.id}`}
              id='info'
              favorites={this.props.favorites}
            >
              <span id='icons'>{webinfo}</span> more info
            </Link>
            <br />

            <span id='icons'>{phone}</span>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <br />

            <a target='_new' href={website}>
              <span id='icons'>{globe}</span>
              {website}
            </a>
          </div>
          <button
            className={
              this.props.favorites.some(
                (b) => b.brewery.brewery_name === displayName,
              )
                ? 'submit yellow'
                : 'submit red'
            }
            onClick={(e) => this.props.addFavorite(e, info)}
          >
            {beer}
          </button>
        </div>
      </div>
    );
  }
}
