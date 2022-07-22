import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="pa3 ba b--green bg-lightest-blue searchBox"
      type="search"
      placeholder="search characters"
      onChange={searchChange}
    />
  )
}

export default SearchBox;
