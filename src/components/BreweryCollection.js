import React from "react";
import BreweryShowPage from "./BreweryShowPage";
// import BreweryShowPageBack from "./BreweryShowPageBack";
import Flippy, { FrontSide, BackSide } from "react-flippy";
const BreweryCollection = (props) => {
  console.log("all breweries from brewery collection", props.breweries);
  const beer = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M11.793 1.576c1.255 0 2.319.82 2.684 1.955.214-.082.447-.126.689-.126 1.074 0 1.944.871 1.944 1.944s-.871 1.944-1.944 1.944c-.626 0-1.183-.296-1.539-.756-.493.423-1.134.679-1.835.679-.884 0-1.673-.408-2.19-1.045-.424.497-1.056.813-1.761.813-.604 0-1.155-.231-1.567-.611-.354.487-.927.804-1.575.804-2.981 0-2.721-3.889 0-3.889.398 0 .769.12 1.077.326.383-.751 1.164-1.266 2.065-1.266.591 0 1.131.222 1.541.586.493-.813 1.389-1.358 2.411-1.358zm0-1.576c-.971 0-1.945.322-2.747.964-1.29-.42-2.746-.145-3.795.792-2.148-.339-4.251 1.056-4.251 3.669 0 1.941 1.758 3.328 3.699 3.328.613 0 1.209-.162 1.731-.457.998.388 2.127.35 3.108-.126 1.166.698 2.638.832 3.957.278.505.273 1.077.42 1.672.42 1.941 0 3.521-1.579 3.521-3.521 0-1.874-1.472-3.411-3.32-3.515-.768-1.067-2.056-1.832-3.575-1.832zm-2.793 20h-2v-10.072c.604.197 1.479.176 2-.144v10.216zm8 1.224v-11.375c-.619.235-1.299.34-2 .292v11.083c0 .273.019.538.084.791h-10.168c.064-.253.084-.518.084-.791v-11.21c-.671.067-1.331-.012-1.97-.232v11.442c0 .664-.366 1.203-1.03 1.203v1.573h16v-1.573c-.664 0-1-.539-1-1.203zm2.851-12.224h-1.851v2h1.492c2.416 0 1.663 4.425-1.492 6.255v2.16c3.209-1.213 5-4.424 5-6.963 0-1.918-1.005-3.452-3.149-3.452z" />
    </svg>
  );
  return (
    <div>
      <legend className="header">Breweries</legend>
      <div class="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="search..."
          value={props.inputValue}
          onChange={props.breweryFilterOnChange}
        />
      </div>
      <div className="cards">
        {props.filteredBreweries.map((brewery) => {
          return (
            <div className="row">
              <div className="card" brewery={brewery} key={brewery.id}>
                <a
                  className="website"
                  style={{ display: "table-cell" }}
                  href={brewery.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {brewery.brewery_name}
                </a>
                <h6>Brewery Style: {brewery.brewery_type}</h6>
                <p>
                  {brewery.street} <br />
                  {brewery.city}, {brewery.state} {brewery.postal_code}
                </p>
                <a href={`tel:${brewery.phone}`} className="phone-number">
                  {""}
                  {brewery.phone.length > 0
                    ? brewery.phone
                    : "No phone number available"}
                </a>
                <button
                  brewery={brewery}
                  id={brewery.id}
                  className="submit"
                  onClick={(e) => props.addFavorite(e, brewery)}
                >
                  {beer}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BreweryCollection;
