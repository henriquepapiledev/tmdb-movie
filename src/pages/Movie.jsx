import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { MOVIE_GET_ID } from '../api/api';
import MovieTitle from '../components/Movies/MovieTitle';
import MovieRecommendations from '../components/Movies/MovieRecommendations';

const Movie = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const movieImage = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const { url, options } = MOVIE_GET_ID(id);
    request(url, options);
  }, [request, id]);

  if (data)
    return (
      <>
        <section className="topo">
          <div className="bg-secondary-color pt-18">
            <div className="container">
              <div className="flex gap-8">
                <div className="w-96 flex-none mb-[-3rem]">
                  <img
                    className="w-full rounded-md object-cover"
                    src={`${movieImage}${data.poster_path}`}
                    alt={data.title}
                  />
                </div>
                <div className="w-3xl">
                  <h1 className="font-bold text-[2rem] text-white leading-none mb-3">
                    {data.title} (2016)
                  </h1>
                  <p className="font-normal text-xl text-white mb-4">
                    16 anos • 11/02/2016 (BR) • Ação, Aventura, Comédia, Ficção
                    científica • 1h 47m
                  </p>
                  <h2 className="font-bold text-xl text-white mb-2">Sinopse</h2>
                  {data.overview ? (
                    <p className="font-normal text-xl text-quaternary mb-2">
                      {data.overview}
                    </p>
                  ) : (
                    <p className="font-normal text-xl text-quaternary mb-2">
                      Sem descrição.
                    </p>
                  )}
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content pt-[4.75rem]">
          <div className="container">
            <MovieTitle title="Elenco original" />
          </div>
        </section>

        <section className="content pt-10">
          <div className="container">
            <MovieTitle title="Trailer" />
          </div>
        </section>

        <section className="content pt-16 pb-8">
          <div className="container">
            <MovieTitle title="Recomendações" />
            <div className="movie-list grid grid-cols-6 gap-8 gap-y-12">
              <MovieRecommendations />
            </div>
          </div>
        </section>
      </>
    );
  else return null;
};

export default Movie;
