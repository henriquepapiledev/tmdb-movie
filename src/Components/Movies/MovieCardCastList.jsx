import { Link, useParams } from 'react-router-dom';
import MovieCardCast from './MovieCardCast';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { MOVIE_CAST_GET } from '../../api/api';

const MovieCardCastList = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = MOVIE_CAST_GET(id);
    request(url, options);
  }, [request, id]);

  if (data)
    return (
      <>
        {data.cast.length === 0 ? (
          <div>
            <p className="font-normal text-base text-tertiary">
              Elenco indisponível.
            </p>
          </div>
        ) : (
          <div className="movie-cast grid auto-cols-[minmax(236px,auto)] grid-flow-col gap-4 overflow-x-scroll pt-0.5 pb-6 pl-1 pr-1">
            {data.cast.map(({ id, name, character, profile_path }) => (
              <Link to="/pessoa" key={id}>
                <MovieCardCast
                  id={id}
                  name={name}
                  character={character}
                  profile_path={profile_path}
                />
              </Link>
            ))}
          </div>
        )}
      </>
    );
  else return null;
};

export default MovieCardCastList;
