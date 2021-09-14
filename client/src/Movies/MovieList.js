import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function MovieList(props) {
  const { movies } = props;
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  const linkStyle = {
    color: 'black',
    textDecoration: 'none' 
  }

  return (
    <Link to={`/movies/${props.movie.id}`} style={linkStyle}>
      <div className="movie-card" >
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
