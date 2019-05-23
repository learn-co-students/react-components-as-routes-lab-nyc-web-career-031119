import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map( actor => {
    return (
      <div>
        <h1>Name: {actor.name}</h1>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
