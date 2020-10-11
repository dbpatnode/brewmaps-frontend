import React from 'react';
import Map from '../components/Map.js'
import axios from 'axios'


class MapContainer extends React.Component {

    state = {
        pins: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/breweries',{withCredentials: true})
        // .then(resp => console.log(resp))
        .then(resp => {this.setState({pins: resp.data})
        })
    }

    

    render() {
        // console.log(this.state.pins)
        return (
            <Map pins= {this.state.pins}/>
        )
    }
}

export default MapContainer