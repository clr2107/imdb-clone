import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to IMDB Clone</h1>
        <h2>Popular Movies</h2>
        <Movies />
      </div>
    );
  }
}

export default App;
