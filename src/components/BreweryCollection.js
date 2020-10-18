import React from "react";
import BreweryShowPage from "./BreweryShowPage";
// import BreweryShowPageBack from "./BreweryShowPageBack";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const BreweryCollection = (props) => {
  console.log("all breweries from brewery collection", props.breweries);
  return (
    <div className="fav-header">
      <h1 id="brewery-header">Breweries</h1>

      <input
        type="text"
        placeholder="search"
        value={props.inputValue}
        onChange={props.breweryFilterOnChange}
      />

      <div className="cards">
        {props.filteredBreweries.map((brewery) => {
          return (
            <div className="ml-5 mb-3" brewery={brewery} key={brewery.id}>
              <FrontSide style={{ backgroundColor: "#ffffff" }}>
                <BreweryShowPage
                  key={brewery.id}
                  brewery={brewery}
                  addFavorite={props.addFavorite}
                  removeFavorite={props.removeFavorite}
                />
              </FrontSide>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreweryCollection;
