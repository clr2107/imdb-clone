import React, { Component } from 'react'
import Movie from './Movie'
import $ from "jquery";

class Movies extends Component {
  constructor() {
    super()
    this.state= {movies: []}
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=16dc9f1a248a9e17f32075d608f5cfa0&language=en-US&page=1')
      .then((response) => response.json())
      .then((responseJson) => {
         this.setState({
        movies: responseJson.results
      });
      })
      .catch((error) => {
        console.error(error);
      });
    // $.ajax({
    //   url: 'https://api.themoviedb.org/3/movie/popular?api_key=16dc9f1a248a9e17f32075d608f5cfa0&language=en-US&page=1'
    // })
    // .done(function(response){

      // this.setState({
      //   movies: response.results
      // });
    // }.bind(this))
    // .fail(function(xhr) {
    //   alert("fail");
    // })
}

render() {
  return (
    <section id="movies-container">
    <h3>Movies</h3>
    <ul>
    {
      this.state.movies.map((movie, i) => <Movie movie={movie} key={i}/>)
    }

    </ul>
    </section>
    )
  }

}

export default Movies;

