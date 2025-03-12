import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import MovieCard from './MovieCard';
import { MOVIE_AND_CATEGORY_GET } from '../../api/api';

const MovieList = ({ selectedGenres, currentPage, setTotalPages }) => {
  const { data, loading, error, request } = useFetch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { url, options } = MOVIE_AND_CATEGORY_GET({
        currentPage,
        selectedGenres,
      });
      const { json } = await request(url);
      setMovies(json.results);
      setTotalPages(json.total_pages);
    };
    fetchMovies();
  }, [selectedGenres, currentPage, setTotalPages]);

  if (data)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
          />
        ))}
      </div>
    );
  else return null;
};

export default MovieList;
