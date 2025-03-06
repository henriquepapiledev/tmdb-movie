import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { MOVIE_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';

const MovieList = () => {
  const { data, loading, error, request } = useFetch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { url, options } = MOVIE_GET({ page });
    request(url, options);
  }, [request, page]);

  if (data)
    return (
      <div className="movie-list grid grid-cols-6 gap-8 gap-y-12">
        {data.results.map(({ id, poster_path, title, release_date }) => (
          <MovieCard
            key={id}
            id={id}
            poster_path={poster_path}
            title={title}
            release_date={release_date}
          />
        ))}
      </div>
    );
  else return null;
};

export default MovieList;
