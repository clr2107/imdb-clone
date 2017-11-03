import React, { Component } from 'react';

class Movie extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <li className="movie">
        <div className="movie-content">
        <p>
          <span className="title">{movie.title}</span>
        </p>
        </div>
      </li>
      );
  }
}

export default Movie;