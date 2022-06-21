import React, { useState, useRef, useCallback } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import MapBreweryCard from "./MapBreweryCard";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN;

const Map = ({ breweries, favorites, addFavorite }) => {
  const [viewport, setViewport] = useState({
    longitude: -99.576229,
    latitude: 37.720919,
    zoom: 3.8,
  });

  const [popUpInfo, setPopUpInfo] = useState(null);

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    [],
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange],
  );

  const filterPins = () => {
    return breweries.filter(
      (brewery) => brewery.lng !== null || brewery.lat !== null,
    );
  };

  const onClickMarker = (brewery) => {
    setPopUpInfo(brewery);
  };

  return (
    <div style={{ height: "100vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {filterPins().length === 0 ? (
          <div className='loading'>
            <div className='loader'>Loading...</div>
          </div>
        ) : (
          filterPins().map((brewery) => (
            <Marker
              key={brewery.id}
              longitude={brewery.lng}
              latitude={brewery.lat}
            >
              <button className='pin' onClick={() => onClickMarker(brewery)}>
                <img src='./hop_logo.png' alt='Brewery Icon' />
              </button>
            </Marker>
          ))
        )}
        {popUpInfo && (
          <Popup
            tipSize={30}
            anchor='top'
            longitude={popUpInfo.lng}
            latitude={popUpInfo.lat}
            closeOnClick={true}
            onClose={() => setPopUpInfo(null)}
          >
            <MapBreweryCard
              info={popUpInfo}
              favorites={favorites}
              addFavorite={addFavorite}
            />
          </Popup>
        )}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position='bottom-right'
        />
      </MapGL>
    </div>
  );
};

export default Map;
