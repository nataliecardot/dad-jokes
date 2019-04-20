import React from 'react';

const RetrievalForm = props => {
  console.log(props.onFormSubmit);

  const onSubmit = e => {
    // Prevents GET request/page refresh on submit
    e.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter search term..."
        onChange={props.onSearchInputChange}
        required
      />
      <button disabled={props.isSearching}>Search</button>
      <button onClick={props.onRandomize} disabled={props.isSearching}>
        Randomize
      </button>
    </form>
  );
};

export default RetrievalForm;
