import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map( director => {
    return (
      <div>
        <h1>Name: {director.name}</h1>
        <br/>
        <p>Movies:</p>
        <ul>
          {director.movies.map( movie => <li> {movie} </li> )}
        </ul>
        <br />
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
