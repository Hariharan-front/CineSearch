// MovieListing.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovies, getAllShows } from '../../SlicePage/movies/movieSlice';
import MovieCard from '../ContainerMovie/MovieContainer';
import './MovieQueue.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; // Import the LoadingSpinner component
import { fetchAsyncMovies, fetchAsyncShows } from '../../SlicePage/movies/movieSlice'; // Import your async thunks

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true); // Set up a loading state

  useEffect(() => {
    // Fetch movies and shows
    Promise.all([
      dispatch(fetchAsyncMovies()),
      dispatch(fetchAsyncShows()),
    ]).then(() => setLoading(false)); // Set loading to false when all data is fetched
  }, [dispatch]);

  let renderMovies, renderShows = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {loading ? ( // Conditionally render the LoadingSpinner when loading is true
          <LoadingSpinner loading={loading} />
        ) : (
          <div className="movie-container">{renderMovies}</div>
        )}
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {loading ? ( // Conditionally render the LoadingSpinner when loading is true
          <LoadingSpinner loading={loading} />
        ) : (
          <div className="movie-container">{renderShows}</div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;

