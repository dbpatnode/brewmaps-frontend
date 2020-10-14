import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import FavoriteElement from './FavoriteElement';
// import { LinkPreviewer } from "./LinkPreviewer";




class BreweryShowPage extends Component {


    render() {
        // console.log("phone", this.props.brewery)
        // const phone = this.props.brewery.phone
        const {brewery_name, brewery_type, street, city, state, postal_code, phone, website_url} = this.props.brewery
        return (
            <div>
                <h1>{brewery_name}</h1>
                <h3>Brewery Style: {brewery_type}</h3>
                <p>{street} <br/>{city}, {state} {postal_code}</p>
                
                <a style={{display: "table-cell"}} href={website_url} target="_blank" rel="noopener noreferrer">website</a>
                <br/>

                <a href= {`tel:${phone}`}>Call us at {phone}</a>
                <br/>

                <FavoriteElement
                    favorites={this.props.favorites} 
                    addFavorite={this.props.addFavorite}
                    brewery = {this.props.brewery}
                />


                <Link to = '/map'>
                    <button>Back to map</button>
                </Link>
                
            </div>
        );
    }
}

export default BreweryShowPage;