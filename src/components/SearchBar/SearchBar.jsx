import React from 'react';

const SearchBar = ({ inputValue, onChange }) => {
  return (
    <div className='search__container'>
      <input
        className='search__input'
        type='text'
        placeholder='search...'
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};
export default SearchBar;
