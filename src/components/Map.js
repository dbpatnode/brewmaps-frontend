// import React from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";
// import BreweryCard from "./BreweryCard.js";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// class Map extends React.Component {
//   state = {
//     viewport: {
//       longitude: -94.692584,
//       latitude: 42.188877,
//       zoom: 3.5,
//     },
//     popupInfo: null,
//   };

//   filterPins() {
//     return this.props.pins.filter(
//       (pin) => pin.lng !== null || pin.lat !== null
//     );
//   }

//   myMap = React.createRef();

//   geocoderContainerRef = React.createRef();

//   // this allows dragging mouse to move map
//   handleViewportChange = (viewport) => {
//     this.setState({
//       viewport: { ...this.state.viewport, ...viewport },
//     });
//   };

//   _onClickMarker = (pin) => {
//     this.setState({ popupInfo: pin });
//   };

//   _renderPopup() {
//     const { popupInfo } = this.state;

//     return (
//       popupInfo && (
//         <Popup
//           tipSize={5}
//           anchor="top"
//           longitude={popupInfo.lng}
//           latitude={popupInfo.lat}
//           closeOnClick={false}
//           onClose={() => this.setState({ popupInfo: null })}
//         >
//           <BreweryCard info={popupInfo} />
//         </Popup>
//       )
//     );
//   }

//   render() {
//     return (
//       <div className="mapContainer">
//         <div alignItems="center">
//           <div
//             className="map-search-input"
//             ref={this.geocoderContainerRef}
//             style={{
//               height: 50,
//               background: "white",
//               display: "flex",
//               alignItems: "center",
//               paddingLeft: 4,
//             }}
//           />
//         </div>
//         <ReactMapGL
//           ref={this.myMap}
//           {...this.state.viewport}
//           onViewportChange={this.handleViewportChange}
//           width="100%"
//           height="100%"
//           mapStyle="mapbox://styles/mapbox/streets-v11"
//           mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw"
//         >
//           {this.filterPins().map((pin) => (
//             <Marker key={pin.id} longitude={pin.lng} latitude={pin.lat}>
//               <button className="pin" onClick={() => this._onClickMarker(pin)}>
//                 <img src="./hop_logo.png" alt="Brewery Icon" />
//               </button>
//             </Marker>
//           ))}
//           {this._renderPopup()}
//           <Geocoder
//             mapRef={this.myMap}
//             containerRef={this.geocoderContainerRef}
//             mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw"
//             onViewportChange={this.handleViewportChange}
//           />
//         </ReactMapGL>
//       </div>
//     );
//   }
// }
// export default Map;

import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import BreweryCard from "./BreweryCard.js";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

class Map extends React.Component {
  state = {
    viewport: {
      longitude: -94.692584,
      latitude: 42.188877,
      zoom: 3.5,
    },
    popupInfo: null,
  };

  filterPins() {
    // const breweries = JSON.parse(localStorage.getItem("allBreweries"));
    return this.props.breweries.filter(
      (brewery) => brewery.lng !== null || brewery.lat !== null
    );
  }

  myMap = React.createRef();

  geocoderContainerRef = React.createRef();

  // this allows dragging mouse to move map
  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  _onClickMarker = (brewery) => {
    this.setState({ popupInfo: brewery });
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.lng}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <BreweryCard info={popupInfo} addFavorite={this.props.addFavorite} />
        </Popup>
      )
    );
  }

  render() {
    {
      this.filterPins();
    }
    return (
      <div className="mapContainer">
        <div alignItems="center">
          <div
            className="map-search-input"
            ref={this.geocoderContainerRef}
            style={{
              height: 50,
              background: "white",
              display: "flex",
              alignItems: "center",
              paddingLeft: 4,
            }}
          />
        </div>
        <ReactMapGL
          ref={this.myMap}
          {...this.state.viewport}
          onViewportChange={this.handleViewportChange}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken="pk.eyJ1IjoiZGJwYXRub2RlIiwiYSI6ImNrZnk4aWJ1MjAwN2kyem55MzVmaWh0MnkifQ.9Xu3ZCcZg5OPrXUkqrMILQ"
        >
          {this.filterPins().map((brewery) => (
            <Marker
              key={brewery.id}
              longitude={brewery.lng}
              latitude={brewery.lat}
            >
              <button
                className="pin"
                onClick={() => this._onClickMarker(brewery)}
              >
                <img src="./hop_logo.png" alt="Brewery Icon" />
              </button>
            </Marker>
          ))}
          {this._renderPopup()}
          <Geocoder
            mapRef={this.myMap}
            containerRef={this.geocoderContainerRef}
            mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNsZWlicyIsImEiOiJja2Z5OGVmb20xMjlxMnRvazY0OTlqMXVkIn0.G1QPTc55QLc2rXKcO47jzw"
            onViewportChange={this.handleViewportChange}
          />
        </ReactMapGL>
      </div>
    );
  }
}
export default Map;
