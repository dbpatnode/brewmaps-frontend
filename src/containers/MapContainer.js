import React, { Component } from "react";
import Map from "../components/Map.js";

class MapContainer extends Component {
  render() {
    return (
      <Map
        user={this.props.user}
        breweries={this.props.breweries}
        addFavorite={this.props.addFavorite}
      />
    );
  }
}

export default MapContainer;
