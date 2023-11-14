import React, { useState, useEffect } from 'react';

const MovieApp = ({featuredMovie, playVideo}) => {


  return (
    <div>
      {
        playVideo ? <video src={featuredMovie?.VideoUrl} autoPlay muted loop className="video-bg" /> :
        <img src={require(`../../assets/images/${featuredMovie.CoverImage}`)} className="featured-cover-image" />
      }
    </div>
  );
};

export default MovieApp;