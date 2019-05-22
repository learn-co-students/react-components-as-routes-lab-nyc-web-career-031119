import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const generateActors = () => {
    return actors.map(actor => {
      return (
        <div>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            { actor.movies.map(movie => {
              return <li>{movie}</li>
            }) }
          </ul>
        </div>
      )
    });
  }

  return (
    <div className="actor">
      <h1>Actors Page</h1>
      { generateActors() }
    </div>
  );
};

export default Actors;
