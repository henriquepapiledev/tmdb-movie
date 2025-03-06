import React from 'react';
import { useEffect } from 'react';
import MovieButtonCategory from './MovieButtonCategory';
import useFetch from '../../hooks/useFetch';
import { MOVIE_CATEGORY_GET } from '../../api/api';

const MovieListCategory = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = MOVIE_CATEGORY_GET();
    request(url, options);
  }, [request]);

  if (data)
    return (
      <div className="movie-category flex flex-wrap justify-center gap-3 max-w-5xl mt-4 m-auto">
        {data.genres.map(({ name }) => (
          <MovieButtonCategory key={name} name={name} />
        ))}
      </div>
    );
};

export default MovieListCategory;
