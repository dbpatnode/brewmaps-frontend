import React, { Component } from "react";
import FavoritesShowPage from "../components/FavoritesShowPage";
import BreweryShowPageBack from "../components/BreweryShowPageBack";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class FavoriteContainer extends Component {
  //   state = {
  //     userFavorites: this.props.favorites,
  //   };
  render() {
    console.log(this.props.favorites);
    return (
      <div>
        <div className="fav-header">
          <h4>Favorites</h4>
        </div>
        <div>
          {this.props.favorites.map((favorite) => {
            return (
              <div className="ml-5 mb-3" favorite={favorite} key={favorite.id}>
                <Flippy flipOnClick={true} style={{ width: "500px" }}>
                  <FrontSide style={{ backgroundColor: "#ffffff" }}>
                    <h4>{favorite.brewery.brewery_name}</h4>
                    <FavoritesShowPage
                      favorite={favorite}
                      user={this.props.user}
                      key={favorite.brewery.id}
                      addFavorite={this.props.addFavorite}
                      removeFavorite={this.props.removeFavorite}
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
