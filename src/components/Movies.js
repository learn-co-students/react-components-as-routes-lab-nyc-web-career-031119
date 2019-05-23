import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const allMovies = movies.map( movie => {
    return (
      <div>
        <h1>Name: {movie.title}</h1>
        <br/>
        <p>Time: {movie.time}</p>
        <br />
        <p>Genres:</p>
          <ul>
            {movie.genres.map(genre => {
              return <li> {genre} </li>
            })}
          </ul>
        <br/>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {allMovies}
    </div>
  );
};

export default Movies;
