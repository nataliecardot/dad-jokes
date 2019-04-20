// TODO: Randomize joke

import React, { Component } from 'react';
import RetrievalForm from './retrieval-form';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      joke: null,
      jokes: [],
      isFetchingJokes: false,
      isSearch: false
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.randomizeJokes = this.randomizeJokes.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  randomizeJokes() {
    this.setState({
      isFetchingJokes: true,
      isSearch: false
    });

    fetch(
      'https://icanhazdadjoke.com/',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
    })
      .then(response => response.json())
      // API returns an object with joke, id, and status
      .then(json => {
        let joke = json.joke;
        // TODO: figure out why this works without setting initial state for joke
        this.setState({
          joke,
          isFetchingJokes: false
        });
      });
  }

  // Default parameter
  searchJokes(limit = 15) {
    // If nothing entered, user gets "Please fill out this field" message due to "required" attribute on input element
    if (this.state.searchTerm !== '') {
      this.setState({
        isFetchingJokes: true,
        isSearch: true
      });

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
          let jokes = json.results;
          this.setState({
            jokes,
            isFetchingJokes: false
          });
        });
    }
  }

  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  jokeRender() {
    return (
      <div>
        {this.state.isSearch ?
          <ul>{this.state.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
          </ul> : <p>{this.state.joke}</p>}
      </div>
    );
  }

  render() {
    return (
      <div>
        <RetrievalForm
          onSearch={this.searchJokes}
          onSearchInputChange={this.handleSearchChange}
          isSearching={this.state.isFetchingJokes}
          onRandomize={this.randomizeJokes}
        />

        {this.state.isFetchingJokes ? 'Searching for jokes...' : this.jokeRender()}
      </div>
    );
  };
}

export default App;
