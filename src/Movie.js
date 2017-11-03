import React, { Component } from 'react';
import {render} from 'react-dom'

class Movie extends Component {
  render() {
    let movie = this.props.movie;
    let movie_url = "https://image.tmdb.org/t/p/w500_and_h281_bestv2"
    return (
      <li className="movie">
        <div className="movie-content">
        <p>
          <h5><span className="title">{movie.title}</span></h5><br />
          <span className="overview">Description: {movie.overview}</span><br />
          <span className="release-date">Release date: {movie.release_date}</span><br />
          <img src={movie_url + movie.poster_path}/>
        </p>
        </div>
      </li>
      );
  }
}

export default Movie;