import React, { useState, useEffect } from 'react';
import "../index.css"


const Movie = ({movie, onClick}) => {

  const handleDragStart = (e) => {
    e.preventDefault();
  };
  return (
    <div className="movie-list-item" onClick={onClick} onDragStart={handleDragStart}>
        <img className="movie-list-item-img" src={require(`../../../assets/images/${movie.CoverImage}`)} alt="" />
 </div>
  );
};

export default Movie;