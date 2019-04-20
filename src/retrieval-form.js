import React from 'react';

// Hitting 'Enter' with <input type="text"> focused triggers click event on the first positioned element (here, the search button). If onClick were changed to onSubmit, it would cause the default submit behavior of submitting a GET request and refreshing the page (search results aren't displayed after refresh). onClick doesn't cause refresh and search results are retrieved correctly
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
