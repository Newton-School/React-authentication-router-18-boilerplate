import React, { useState, useEffect } from 'react'

const MoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id} onClick={() => props.onMovieClick(movie)}>
          <img src={movie.poster_path} alt={movie.title} />
          <section className='title-year'>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-release-year'>
              Release Year: {movie.release_date.split('-')[0]}
            </p>
          </section>
        </li>
      ))}
    </ul>
  )
}

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState(props.movie)
  
  return (
    <article className='movie-details'>
      <section className='movie-detail-img'>
        <img
          src={movieDetails.poster_path}
          alt={movieDetails.title}
          className='movie-img'
          width='200px'
        />
      </section>
      <section className='movie-detail-title-year-plot'>
        <h2 className='movie-title-year'>
          {movieDetails.title} ({movieDetails.release_date})
        </h2>
        <p className='movie-plot'>{movieDetails.overview}</p>
        <button onClick={props.onClose} className='close-btn'>
          Close
        </button>
      </section>
    </article>
  )
}

export { MoviesList, MovieDetails }
