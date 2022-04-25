import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// import Geocoder from 'react-map-gl-geocoder';
import MapBreweryCard from './MapBreweryCard';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

class Map extends React.Component {
  state = {
    viewport: {
      longitude: -99.576229,
      latitude: 37.720919,
      zoom: 3.8,
    },
    popupInfo: null,
  };

  filterPins() {
    return this.props.breweries.filter(
      (brewery) =>
        // console.log('brewery: ', brewery);
        brewery.lng !== null || brewery.lat !== null,
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
          tipSize={30}
          anchor='top'
          longitude={popupInfo.lng}
          latitude={popupInfo.lat}
          closeOnClick={true}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <MapBreweryCard
            info={popupInfo}
            favorites={this.props.favorites}
            addFavorite={this.props.addFavorite}
          />
        </Popup>
      )
    );
  }

  render() {
    this.filterPins();

    return (
      <div className='mapContainer'>
        {/* <div alignItems='center'> */}
        {/* <div
            className='map-search-input'
            ref={this.geocoderContainerRef}
            style={{
              height: 50,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 4,
            }}
          // /> */}
        {/* </div> */}
        <span>
          <ReactMapGL
            ref={this.myMap}
            {...this.state.viewport}
            onViewportChange={this.handleViewportChange}
            width='100%'
            height='100%'
            mapStyle='mapbox://styles/mapbox/streets-v11'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
          >
            {this.filterPins().map((brewery) => (
              <Marker
                key={brewery.id}
                longitude={brewery.lng}
                latitude={brewery.lat}
              >
                <button
                  className='pin'
                  onClick={() => this._onClickMarker(brewery)}
                >
                  <img src='./hop_logo.png' alt='Brewery Icon' />
                </button>
              </Marker>
            ))}
            {this._renderPopup()}
            {/* <Geocoder
              mapRef={this.myMap}
              containerRef={this.geocoderContainerRef}
              mapboxApiAccessToken={
                process.env.REACT_APP_GEOCODER_API_ACCESS_TOKEN
              }
              onViewportChange={this.handleViewportChange}
            /> */}
          </ReactMapGL>
        </span>
      </div>
    );
  }
}
export default Map;
