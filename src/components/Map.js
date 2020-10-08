import React from 'react'; 
import ReactMapGL, {Marker, GeolocateControl, NavigationControl} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
class Map extends React.Component {
    state = {
        viewport : {
        longitude: -94.692584,
        latitude: 42.188877,
        zoom: 3.5
    }
}
    myMap = React.createRef()
    geocoderContainerRef = React.createRef();
    handleViewportChange = (viewport) => {
        this.setState({
            viewport: {...this.state.viewport, ...viewport}
        })
    }
    render() {
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
                width= "100%"
                height="100%"
                mapStyle='mapbox://styles/mapbox/streets-v11'
                mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw'>
               <Geocoder mapRef={this.myMap} containerRef={this.geocoderContainerRef}  mapboxApiAccessToken = 'pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw' onViewportChange={this.handleViewportChange} />
               {/* <GeolocateControl/>
               <NavigationControl/> */}
               </ReactMapGL>
            </div>
        )
    }
}
export default Map;