import React from 'react';
import MovieButtonCategory from './MovieButtonCategory';

const MovieListCategory = () => {
  return (
    <div className="movie-category flex flex-wrap justify-center gap-3 max-w-5xl mt-4 m-auto">
      <MovieButtonCategory />
    </div>
  );
};

export default MovieListCategory;
