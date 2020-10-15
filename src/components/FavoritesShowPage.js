import React, { Component } from "react";
import { Link } from "react-router-dom";
import RemoveFavoriteElement from "./FavoriteElement";
// import { LinkPreviewer } from "./LinkPreviewer";

class FavoriteShowPage extends Component {
  render() {
    // console.log("phone", this.props.brewery)
    // const phone = this.props.brewery.phone
    const {
      brewery_name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
    } = this.props.brewery;
    return (
      <div>
        <h4>{brewery_name}</h4>
        <h3>Brewery Style: {brewery_type}</h3>
        <p>
          {street} <br />
          {city}, {state} {postal_code}
        </p>

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
        <br />
        <div>
          <RemoveFavoriteElement
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

export default FavoriteShowPage;
