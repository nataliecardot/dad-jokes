// TODO: Randomize joke

import React, { Component } from 'react';
import RetrievalForm from './components/retrieval-form';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJokes: false
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  };

  // Default parameter
  getJokes(limit = 15) {
    this.setState({ isFetchingJokes: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${
        this.state.searchTerm
      }&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
    })
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFetchingJokes: false
        })
      });
  };

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchSubmit(e) {
    e.preventDefault();
    this.getJokes();
  };

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <RetrievalForm
          onFormSubmit={this.handleSearchSubmit}
          onSearchInputChange={this.handleSearchChange}
          isSearching={this.state.isFetchingJokes}
          onRandomize={() => this.getJokes(1)}
        />

        {this.state.isFetchingJokes ? 'Searching for jokes...' : this.renderJokes()}
      </div>
    );
  };
}

export default App;
