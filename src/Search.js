impor React, { Component } from 'react';
import $ from 'jquery'
import Movie from './Movie'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      searchQuery: "",
      results: []
    }
  }

  handleChange(event){
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.searchQuery} onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit"/>
        </form>
        {this.state.results.map( (movie, i) => <Movie key={i} movie={movie}/> )}
      </div>
    );
  }
}

export default Search;