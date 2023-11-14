import React, { useState, useEffect, useMemo } from 'react';
import "./index.css"
import 'react-multi-carousel/lib/styles.css';
import Movie from './Movie';
import AppCarousel from '../AppCarousel';



const MovieList = ({ onClick, movies }) => {
const movieList =  movies?.map(item => <Movie movie={item} key={item.Id} onClick={() => onClick(item)}/>)

  return (
    <div className="movie-list-container">
        <div className="movie-list-wrapper">
        <AppCarousel>
          {movieList}
        </AppCarousel>
        </div>
    </div>
  );
};

export default MovieList;