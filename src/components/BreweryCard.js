
import * as React from 'react';
import {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.brewery_name}`;
    const website = `${info.website_url}`
    const phoneNumber = `${info.phone}`

    console.log(info)
    return (
        // console.log(info.website_url)
      <div>
        <div>
        <a
            target="_new"
            href={website}
          >
           {displayName} {' '}
          </a>
          
          <br />
           Phone Number: {phoneNumber}
          <br />
          
        </div>
        {/* <img width={240} src={info.image} /> */}
      </div>
    );
  }
}