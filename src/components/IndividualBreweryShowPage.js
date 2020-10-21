import React from "react";
import BreweryShowPage from "./BreweryShowPage";
import BreweryShowPageBack from "./BreweryShowPageBack";

import Flippy, { FrontSide, BackSide } from "react-flippy";

const individualBreweryShowPage = (props) => {
  return (
    <div className="fav-header">
      <h4>Breweries</h4>
      {/* <div className="cards">
        {props.breweries.map((brewery) => {
          {
          }
          return (
            <div className="ml-5 mb-3" brewery={brewery} key={brewery.id}>
              <Flippy flipOnClick={true} style={{ width: "300px" }}>
                <FrontSide style={{ backgroundColor: "#ffffff" }}>
                  <BreweryShowPage
                    key={brewery.id}
                    brewery={brewery}
                    addFavorite={props.addFavorite}
                  />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#ffffff" }}>
                  <BreweryShowPageBack brewery={brewery} />
                </BackSide>
              </Flippy>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default individualBreweryShowPage;
