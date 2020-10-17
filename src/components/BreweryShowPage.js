import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoriteElement from "./FavoriteElement";

class BreweryShowPage extends Component {
  render() {
    const {
      brewery_name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
      website_url,
      phone,
    } = this.props.brewery;

    // console.log(this.props.favorite);
    return (
      <div>
        <h4>{brewery_name}</h4>
        <h3>Brewery Style: {brewery_type}</h3>
        <p>
          {street} <br />
          {city}, {state} {postal_code}
        </p>
        <br />
        <a
          style={{ display: "table-cell" }}
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          website
        </a>
        <br />

        <a href={`tel:${phone}`}>Call us at {phone}</a>
        <div>
          <FavoriteElement
            favorites={this.props.favorites}
            addFavorite={this.props.addFavorite}
            brewery={this.props.brewery}
          />
        </div>

        <Link to="/map">
          <button className="brewery-card-button">Back to map</button>
        </Link>
      </div>
    );
  }
}

export default BreweryShowPage;
