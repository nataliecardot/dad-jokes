import React from 'react';

const SearchResults = props => {

  return (
    <ul>
      {props.jokes.map(item =>
        <li key={item.id}>{item.joke}</li>
      )}
    </ul>
  );
};

export default SearchResults;
