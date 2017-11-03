import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import Movie from './Movie';
import Search from './Search';
import $ from 'jquery'
class App extends Component {
  constructor(){
    super();

    this.state = {
      searchQuery: "",
      results: []
    }
  }

  handleChange(e){
    this.setState({
      searchQuery: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let searchQuery = this.state.searchQuery;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=" + searchQuery + "&language=en-US&api_key=16dc9f1a248a9e17f32075d608f5cfa0",
      "method": "GET"
    }

    $.ajax(settings).done(function (response) {
      this.setState({
        results: response.results
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Welcome to IMDB Clone</h1>
        <h3>Search for a movie by title</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.searchQuery} onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit"/>
        </form>
        {this.state.results.map( (movie, i) => <Movie key={i} movie={movie}/> )}

        <h2>Popular Movies</h2>
        <Movies />


 </div>
    );
  }
}

export default App;
