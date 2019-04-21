import React from 'react';

const RetrievalForm = props => {
  const onSubmit = e => {
    // Prevents GET request/page refresh on submit
    e.preventDefault();
    props.onFormSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter search term..."
          onChange={event => props.onInputChange(event.target.value)}
          required
        />
        <button disabled={props.isSearching}>Search</button>
      </form>
      <button onClick={props.onRandomize} disabled={props.isSearching}>
        Randomize
      </button>
    </>
  );
};

export default RetrievalForm;
