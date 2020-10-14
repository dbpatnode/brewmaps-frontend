import React from 'react';
import Map from '../components/Map.js'
// import axios from 'axios'


class MapContainer extends React.Component {

    state = {
        pins: []
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/breweries',{withCredentials: true})
        // .then(resp => {this.setState({pins: resp.data})
        // })
        if(localStorage.getItem("allBreweries")){
            this.setState({pins: JSON.parse(localStorage.getItem("allBreweries"))})
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <Map 
            pins= {this.state.pins}
            addFavorite={this.props.addFavorite}
            />
        )
    }
}

export default MapContainer