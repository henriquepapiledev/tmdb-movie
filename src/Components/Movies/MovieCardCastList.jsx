import { useParams } from 'react-router-dom';
import MovieCardCast from './MovieCardCast';
import SkeletonCardCast from '../../helper/SkeletonCardCast';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { MOVIE_CAST_GET } from '../../api/api';

const MovieCardCastList = () => {
  const { id } = useParams();
  const { data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = MOVIE_CAST_GET(id);
    request(url, options);
  }, [request, id]);

  if (data)
    return (
      <div>
        {data.cast.length === 0 ? (
          <div>
            <p className="font-normal text-base text-tertiary">
              Elenco indisponível.
            </p>
          </div>
        ) : (
          <div className="movie-cast flex overflow-auto overflow-y-hidden gap-4 overflow-x-scroll pt-0.5 pb-6 pl-1 pr-1">
            {data.cast.map(({ id, name, character, profile_path }) => (
              <div className="basis-48 grow-[0] shrink-[0]" key={id}>
                {loading ? (
                  <SkeletonCardCast />
                ) : (
                  <MovieCardCast
                    id={id}
                    name={name}
                    character={character}
                    profile_path={profile_path}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  else return null;
};

export default MovieCardCastList;
