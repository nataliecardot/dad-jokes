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
          onChange={e => props.onInputChange(e.target.value)}
          required
          value={props.searchTerm}
        />
        <div>
          {/* Specifying type here since it's good practice; different browsers may use default types for buttons */}
          <button type="submit" disabled={props.isSearching}>Search</button>
          {/* type="button" stops input validation message from being displayed (on Firefox) when randomize button is clicked without anything entered */}
          <button type="button" onClick={props.onRandomize} disabled={props.isSearching} className="randomize-button">
            Randomize
          </button>
        </div>
      </form>
    </>
  );
};

export default RetrievalForm;
