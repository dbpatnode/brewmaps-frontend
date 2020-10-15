import React, { Component } from "react";
import BreweryShowPage from "../components/BreweryShowPage";
import BreweryShowPageBack from "../components/BreweryShowPageBack";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class FavoriteContainer extends Component {
  render() {
    console.log("favorite contain", this.props.favorites);
    return (
      <div>
        <div className="fav-header">
          <h4>Favorites</h4>
        </div>
        <div>
          {this.props.favorites.map((favorite) => {
            return (
              <div className="ml-5 mb-3" brewery={favorite} key={favorite.id}>
                <Flippy flipOnClick={true} style={{ width: "500px" }}>
                  <FrontSide style={{ backgroundColor: "#ffffff" }}>
                    <BreweryShowPage
                      brewery={favorite.brewery}
                      key={favorite.brewery.id}
                      addFavorite={this.props.addFavorite}
                    />
                  </FrontSide>
                  <BackSide style={{ backgroundColor: "#ffffff" }}>
                    <BreweryShowPageBack brewery={favorite} />
                  </BackSide>
                </Flippy>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FavoriteContainer;
