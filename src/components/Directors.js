import React from 'react';
import { directors } from '../data';

const Directors = () => {
console.log(directors)
  const directorMovies = arr => {
    return arr.map(movie => {
      return <li>{movie}</li>
    })
  }

  const directorsName = arr => {
    return arr.map(director => {
      return <div><h1>{director.name}</h1><ul>{directorMovies(director.movies)}</ul></div>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsName(directors)}
    </div>
  );
}

export default Directors
