import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorMovies = arr => {
    return arr.map(movie => {
      return <li>{movie}</li>
    })
  }

  const actorsName = arr => {
    return arr.map(actor => {
      return <div><h1>{actor.name}</h1><ul>{actorMovies(actor.movies)}</ul></div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsName(actors)}
    </div>
  );
};

export default Actors;
