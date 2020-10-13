import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { LinkPreviewer } from "./LinkPreviewer";


class BreweryShowPage extends Component {


    render() {
        console.log("phone", this.props.brewery)
        // const phone = this.props.brewery.phone
        const {brewery_name, brewery_type, street, city, state, postal_code, phone, website_url} = this.props.brewery
        return (
            <div>
                    <h1>{brewery_name}</h1>
                    <h3>Brewery Style: {brewery_type}</h3>
                    <p>{street} <br/>{city}, {state} {postal_code}</p>
                    
                <LinkPreviewer
                    href={website_url}
                    img src='.hop_logo.png'
                >website
                </LinkPreviewer>
                <br/>

                    <a href= {`tel:${phone}`}>Call us at {phone}</a>
                    <br/>
                    <button>Add To Favorite</button><br/>
                    <button>Remove From Favorite</button>
                    <form>
                    <label>
                        <label> Brewery Notes:</label>
                        <input type="textarea" name="textvalue" className ="note-input"/>
                    </label><br/>
                    <input type="submit" value="Submit" />
                    </form>

                    <Link to = '/map'>
                        <button>Back to map</button>
                    </Link>
                    
            </div>
        );
    }
}

export default BreweryShowPage;