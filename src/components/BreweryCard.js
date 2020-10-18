
import * as React from 'react';
import {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import FavoriteElement from './FavoriteElement'

export default class BreweryCard extends PureComponent {

    render() {
    const {info} = this.props;
    const displayName = `${info.brewery_name}`;
    const website = `${info.website_url}`
    const phoneNumber = `${info.phone}`

    console.log(info.id)
    return (
      
        // console.log(info.website_url)
      <div className="popup">
        <div>
        <a
            target="_new"
            href={website}
          >
           {displayName} 
          </a>
          
          <br />
           Phone Number: {phoneNumber}
          <br />

        <button className="popup-button">
        <Link to= {`brewery/${info.id}`}>
                View Brewery
        </Link>
        </button>

        <FavoriteElement
        // favorites={this.props.favorites}
        brewery={info}
        addFavorite={this.props.addFavorite}
        // brewery = {this.props.brewery}
        />
          
        </div>
        {/* <img width={240} src={info.image} /> */}
      </div>
    );
  }
}