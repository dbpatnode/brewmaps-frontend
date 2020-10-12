
import * as React from 'react';
import {PureComponent} from 'react';
import {Link} from 'react-router-dom'
// import {BreweryShowPage} from './components/BreweryShowPage'

export default class CityInfo extends PureComponent {
  
    
  
    render() {
    const {info} = this.props;
    const displayName = `${info.brewery_name}`;
    const website = `${info.website_url}`
    const phoneNumber = `${info.phone}`

   
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
          
        </div>
        {/* <img width={240} src={info.image} /> */}
      </div>
    );
  }
}