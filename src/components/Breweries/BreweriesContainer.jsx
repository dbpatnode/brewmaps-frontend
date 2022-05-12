import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BreweryCard from './BreweryCard';

const BreweryCollection = (props) => {
  return (
    <div className='top-margin'>
      <h1 className='header'>Breweries</h1>
      <SearchBar
        inputValue={props.inputValue}
        onChange={props.breweryFilterOnChange}
      />

      <div className='cards'>
        {props.filteredBreweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            brewery={brewery}
            addFavorite={props.addFavorite}
            favorites={props.favorites}
          />
        ))}
      </div>
    </div>
  );
};
export default BreweryCollection;
