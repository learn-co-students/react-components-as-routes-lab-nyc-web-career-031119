import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieGenres = arr => {
    return arr.map(genre => {
      return <li>{genre}</li>
    })
  }

  const movieTitle = arr => {
    return arr.map(movie => {
      return <div><h1>{movie.title}: {movie.time}</h1><ul>{movieGenres(movie.genres)}</ul></div>
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {movieTitle(movies)}
    </div>
  );
};

export default Movies;
