import React, { Component } from 'react';
// import ParkCollection from './ParkCollection';
import MapContainer from './MapContainer';
// import FavContainer from './FavContainer'

const breweriesURL = 'http://localhost:3000/breweries';

class ParkContainer extends Component {

    state = {
        allBreweries: [],
        breweries: [],
        // favorites: [],
    }

    componentDidMount() {
        fetch(breweries)
            .then(resp => resp.json())
            .then(parks => this.setState({ breweries: breweries, allBreweries: breweries })
            );
    }

    sortCard = (e) => {
        let card = this.state.allBreweries.filter(brewery => brewery.id === e.pin.id)
        console.log(card)
        this.setState({
            breweries: card
        })
    }

    // addFavorite = (fav) => {
    //     if (!this.state.favorites.includes(fav))
    //         this.setState({
    //             favorites: [...this.state.favorites, fav]
    //         })
    // }

    // removeFavorite = (favToBeRemoved) => {
    //     let newFavorites = this.state.favorites.filter(favItem => favItem !== favToBeRemoved)
    //     this.setState({favorites: newFavorites})
    // }

    // handleRemove = (id) => {
    //     console.log('id', id)
    //     this.state.parks.filter(park => {
    //         return park.id !== id
    //     })
    // }

    render() {
        return (
            <div className="app-grid">
                <div>
                    {/* {this.state.favorites.length !== 0 && 
                    <FavContainer parks={this.state.parks} 
                        favorites={this.state.favorites} 
                        addFavorite={this.addFavorite} 
                        removeFavorite={this.removeFavorite}
                        handleRemove={this.handleRemove}
                    />}  */}
                    <BreweryCollection
                        breweries={this.state.breweries}
                        // addFavorite={this.addFavorite}
                        // removeFavorite={this.removeFavorite}
                    />
                </div>
                <div className="map">
                    <div className="map-position">
                    <MapContainer breweries={this.state.breweries} sortCard={this.sortCard} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ParkContainer;
