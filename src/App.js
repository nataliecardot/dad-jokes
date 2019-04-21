import React, { Component } from 'react';
import RetrievalForm from './retrieval-form';

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

    this.onSearchChange = this.onSearchChange.bind(this);
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
      .then(json => {
        let joke = json.joke;
        this.setState({
          joke,
          isFetchingJokes: false
        });
      });
  }

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

  onSearchChange(value) {
    this.setState({ searchTerm: value });
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
      <div className="app">
        <RetrievalForm
          onFormSubmit={this.searchJokes}
          onInputChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onRandomize={this.randomizeJokes}
        />

        {this.state.isFetchingJokes ? 'Searching for jokes...' : this.jokeRender()}
      </div>
    );
  };
}

export default App;
