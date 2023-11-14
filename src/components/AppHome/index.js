import AppFeaturedContainer from '../AppFeaturedContainer';
import MovieList from '../MovieList';
import jsonData from "../../data/data.json"
import { useEffect, useMemo, useState } from 'react';
import MovieApp from '../../components/MovieApp';

export default function AppHome() {
const [featuredMovie, setFeaturedMovie] = useState(jsonData?.Featured);
const [playVideo, setPlayVideo] = useState(false);
const [movieList, setMovieList] = useState(jsonData?.TrendingNow);

useEffect(() => {
    if(featuredMovie?.VideoUrl){
      setTimeout(() => {
        setPlayVideo(true);
      }, 2000);
  
      return () => {
        clearTimeout();
      }
    }
        
  }, [featuredMovie])

  useEffect(() => {
    const lastClickedMovieId = sessionStorage.getItem("last_clicked_movie_id");

    if (lastClickedMovieId) {
      const initialMovieList = jsonData?.TrendingNow;
      const lastClickedMovieIndex = initialMovieList.findIndex(movie => movie.Id === lastClickedMovieId);

      if (lastClickedMovieIndex !== -1) {
        const reorderedMovies = [
          ...initialMovieList.slice(lastClickedMovieIndex),
          ...initialMovieList.slice(0, lastClickedMovieIndex)
        ];
        setMovieList(reorderedMovies.slice(0, 50)); // Limit to 50 items and update state
      }
    }
    // Empty dependency array ensures this runs only on component mount
  }, []);

const handleClickMovie = (selectedMovie) => {
    setFeaturedMovie(selectedMovie);
    setPlayVideo(false)
    sessionStorage.setItem("last_clicked_movie_id", selectedMovie.Id);
}

    return <>
        <MovieApp featuredMovie={featuredMovie} playVideo={playVideo} />
        <div className="container">
            <AppFeaturedContainer featuredMovie={featuredMovie} />
            <article></article>
            <MovieList onClick={handleClickMovie} movies={movieList} />
        </div>
    </>
}