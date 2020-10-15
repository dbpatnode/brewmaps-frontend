import React from "react";
import WelcomeImage from "./flight.png";

const NewHome = () => {
  return (
    <div className="home">
      <div className="Bio">
        <h1 id="title">BrewMaps</h1>
        <h4 id="subtitle"> Tracking your pints has never been easier </h4>
        <p id="body">
          Itching to find your next favorite brewery? Want to see what else is
          out there? With brew maps, finding breweries across the united states
          is only a few clicks away. Keeping track of those great (and not so
          great) experience allows you the oppurtunity to keep a active log of
          all of your favorites with notes to document your own experiences. Its
          happy hour somewhere, Cheers!{" "}
        </p>
        <br />
        <img src={WelcomeImage} alt="Hop Logo" id="welcome-image"></img>
      </div>
    </div>
  );
};

export default NewHome;
