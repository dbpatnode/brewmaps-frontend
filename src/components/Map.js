import React from 'react'; 
import ReactMapGL, {Marker} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'



class Map extends React.Component {
    state = {
        viewport : {
        longitude: -94.692584,
        latitude: 42.188877,
        zoom: 3.5,
        }
    }
    
    filterPins(){
        return this.props.pins.filter(pin=>
            pin.lng !== null || pin.lat !== null
        )
        // console.log(filtered)
    }

    myMap = React.createRef()
    geocoderContainerRef = React.createRef();
    handleViewportChange = (viewport) => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        })
    }
    render() {

        // console.log(this.props.pins)
        return (
            <div className="mapContainer">
                 <div
                 alignItems="center"><div
          ref={this.geocoderContainerRef}
          style={{
            height: 50,
            background: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 4,
          }}
        /></div>
                <ReactMapGL ref ={this.myMap}
               {...this.state.viewport}
               onViewportChange= {this.handleViewportChange}
                width= "100%"
                height="100%"
                mapStyle='mapbox://styles/mapbox/streets-v11'
                mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw'
                >
                {/* {this.filterPins()} */}
                {this.filterPins().map((pin) => (
                    <Marker key = {pin.id} longitude={pin.lng} latitude={pin.lat} >
                        <button className="pin">
                            <img src= "./hop_logo.png" alt= "Brewery Icon" />
                        </button>
                    </Marker>
                ))}
               <Geocoder mapRef={this.myMap} containerRef={this.geocoderContainerRef}  mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw' onViewportChange={this.handleViewportChange} />
               </ReactMapGL>
            </div>
        )
    }
}
export default Map;

