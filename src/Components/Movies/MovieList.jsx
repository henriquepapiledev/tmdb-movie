import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { API_URL, MOVIE_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const MovieList = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const getMovie = async () => {
      const page = 1;
      const { url, options } = MOVIE_GET({ page });
      await request(url, options);
    };
    getMovie();
  }, [request]);

  if (data)
    return (
      <div className="movie-list grid grid-cols-6 gap-8 gap-y-12">
        {data.results.map(({ id, poster_path, title, release_date }) => (
          <MovieCard
            key={id}
            poster_path={poster_path}
            title={title}
            release_date={release_date}
          />
        ))}
      </div>
    );
  else return null;
  // if (data)
  //   return (
  //     <div>
  //       <h1>teste</h1>
  //       {console.log(data)}
  //     </div>
  //   );
};

export default MovieList;
