import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { MOVIE_GET_ID } from '../api/api';
import MovieTitle from '../components/Movies/MovieTitle';
import MovieRecommendations from '../components/Movies/MovieRecommendations';
import image from '../assets/no-image.jpg';
import MovieVideoTrailer from '../components/Movies/MovieVideoTrailer';
import MovieCardCastList from '../components/Movies/MovieCardCastList';
import MovieAgeRange from '../components/Movies/MovieAgeRange';
import CircularProgressBar from '../utils/CircularProgressBar';

const Movie = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const [genres, setGenres] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);
  const [runTime, setRunTime] = useState(null);
  const [progress, setProgress] = useState(0);
  const movieImage = 'https://image.tmdb.org/t/p/original';

  function formatDate(dataString) {
    if (!dataString) return '';
    const [year, month, day] = dataString.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatYear(dataString) {
    return dataString ? dataString.split('-')[0] : '';
  }

  function formatTime(minutes) {
    if (!minutes) return 'Tempo indisponível';
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    return `${hours}h ${min}m`;
  }

  function voteAverageConvert(vote) {
    return vote ? (vote * 10).toFixed(0) : '0';
  }

  useEffect(() => {
    const getMovie = async () => {
      const { url, options } = MOVIE_GET_ID(id);
      const { json } = await request(url, options);

      setGenres(json.genres.map((genre) => genre.name).join(', '));
      setReleaseYear(formatYear(json.release_date));
      setReleaseDate(formatDate(json.release_date));
      setRunTime(formatTime(json.runtime));
      setProgress(voteAverageConvert(json.vote_average));
    };

    getMovie();
  }, [
    id,
    request,
    setGenres,
    setReleaseDate,
    setRunTime,
    setReleaseYear,
    setProgress,
  ]);

  if (data)
    return (
      <>
        <section className="topo">
          <div className="bg-secondary-color pt-18">
            <div className="container">
              <div className="flex gap-8">
                <div className="w-96 flex-none mb-[-3rem]">
                  <img
                    className="w-full rounded-md object-cover shadow-md"
                    src={
                      data.poster_path
                        ? `${movieImage}${data.poster_path}`
                        : image
                    }
                    alt={data.title}
                  />
                </div>
                <div className="w-4xl pb-16">
                  <h1 className="font-bold text-[2rem] text-white leading-none mb-3">
                    {data.title} ({releaseYear})
                  </h1>
                  <p className="font-normal text-xl text-white mb-4">
                    <MovieAgeRange /> • {releaseDate} (BR) • {genres} •{' '}
                    {runTime}
                  </p>

                  <div className="flex items-center gap-3 mb-8">
                    <CircularProgressBar
                      sqSize={60}
                      strokeWidth={6}
                      percentage={progress}
                    />
                    <p className="font-normal text-base text-white leading-[1.3] w-25">
                      Avaliação dos usuários
                    </p>
                  </div>
                  <h2 className="font-bold text-xl text-white mb-2">Sinopse</h2>
                  <p className="font-normal text-xl text-quaternary line-clamp-5 mb-2">
                    {data.overview ? data.overview : 'Descrição indisponível.'}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content pt-[4.75rem]">
          <div className="container">
            <MovieTitle title="Elenco original" />
            <MovieCardCastList />
          </div>
        </section>

        <MovieVideoTrailer />

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
