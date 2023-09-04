import React, { useEffect, useState } from "react";
import MovieListing from "../MovieQueue/MovieQueue";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../SlicePage/movies/movieSlice";
const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
      setLoading(false);
  }, [dispatch]);
  return (
    <div>
          <div className="banner-img"></div>
          {loading ? (
              <LoadingSpinner />
          ) : (
              <MovieListing />
          )};
    </div>
  );
};

export default Home;