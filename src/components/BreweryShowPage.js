import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import FavoriteContainer from './FavoriteContainer'
// import BreweryCollection from './BreweryContainer.js'
// // import axios from 'axios';


// // const breweriesURL = 'http://localhost:3000/breweries'

class BreweryShowPage extends Component {

//     state = {
//         allBreweries: [],
//         breweries: [],
//         favorites: [],
//     }

//     componentDidMount() {
//         fetch('http://localhost:3000/breweries')
//             .then(resp => resp.json())
//             .then(breweries => this.setState({ breweries: breweries, allBreweries: breweries })
//             );
//     }

//     // sortCard = (e) => {
//     //     let card = this.state.allBreweries.filter(brewery => brewery.id === e.pin.id)
//     //     console.log(card)
//     //     this.setState({
//     //         breweris: card
//     //     })
//     // }

//     addFavorite = (fav) => {
//         if (!this.state.favorites.includes(fav))
//             this.setState({
//                 favorites: [...this.state.favorites, fav]
//             })
//     }

//     // removeFavorite = (favToBeRemoved) => {
//     //     let newFavorites = this.state.favorites.filter(favItem => favItem !== favToBeRemoved)
//     //     this.setState({favorites: newFavorites})
//     // }

//     // handleRemove = (id) => {
//     //     console.log('id', id)
//     //     this.state.brewery.filter(brewery => {
//     //         return brewery.id !== id
//     //     })
//     // }

    render() {
        console.log("phone", this.props.brewery.phone)
        // const phone = this.props.brewery.phone
        const {brewery_name, brewery_type, street, city, state, postal_code, phone, website_url} = this.props.brewery
        return (
            <div>
                    <h1>{brewery_name}</h1>
                    <h3>Brewery Style: {brewery_type}</h3>
                    <p>{street} <br/>{city}, {state} {postal_code}</p>
                    <a href={website_url}>Website</a><br/>
                    <a href= {`tel:${phone}`}>Call us at {phone}</a>
                    <br/>
                    <button>Add To Favorite</button><br/>
                    <button>Remove From Favorite</button>
                    <form>
                    <label>
                        <label> Brewery Notes</label>
                        <input type="textarea" name="textvalue" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                    
            </div>
        );
    }
}

export default BreweryShowPage;