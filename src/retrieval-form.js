import React from 'react';

const RetrievalForm = props => (
  <form>
    <input
      type="text"
      placeholder="Enter search term..."
      onChange={props.onSearchInputChange}
      required
    />
    <button onClick={props.onSearch} disabled={props.isSearching}>Search</button>
    <button onClick={props.onRandomize} disabled={props.isSearching}>
      Randomize
    </button>
  </form>
);

export default RetrievalForm;
