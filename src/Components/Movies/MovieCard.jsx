import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/no-image.jpg';
import Star from '../../assets/icon-star.svg?react';

const MovieCard = ({ id, poster_path, title, release_date, vote_average }) => {
  const movieImage = 'https://image.tmdb.org/t/p/original' + poster_path;
  const [releaseDate, setReleaseDate] = useState(null);
  const [releaseDateYear, setReleaseDateYear] = useState(null);
  const [releaseVoteAverage, setReleaseVoteAverage] = useState(null);

  function formatDate(dataString) {
    if (!dataString) return '';
    const [year, month, day] = dataString.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatDateYear(dataString) {
    if (!dataString) return '';
    const [year] = dataString.split('-');
    return `${year}`;
  }

  function formatVoteAverage(data) {
    if (!data) return '';
    return data.toFixed(1);
  }

  useEffect(() => {
    setReleaseDate(formatDate(release_date));
  }, [setReleaseDate]);

  useEffect(() => {
    setReleaseDateYear(formatDateYear(release_date));
  }, [setReleaseDateYear]);

  useEffect(() => {
    setReleaseVoteAverage(formatVoteAverage(vote_average));
  }, [setReleaseVoteAverage]);

  return (
    <div className="h-full">
      <Link className="block h-full" to={`/filme/${id}`}>
        <figure
          className=" relative flex flex-col justify-between h-full"
          id={id}
        >
          {releaseDateYear ? (
            <div className="absolute top-2 left-2 z-10 font-bold text-white text-sm leading-normal bg-opacity-color p-0.5 pl-2 pr-2 rounded-full">
              {releaseDateYear}
            </div>
          ) : (
            ''
          )}

          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-opacity-color p-0.5 pl-2 pr-2 rounded-full">
            <Star />
            <span className="relative top-[1px] font-bold text-white text-sm leading-normal">
              {releaseVoteAverage ? releaseVoteAverage : '0'}
            </span>
          </div>
          <div className="relative flex-auto transition duration-150 ease-in-out hover:scale-[1.01] hover:translate-y-[-10px] hover:shadow-md hover:after:bg-black/50 after:content-[''] after:block after:h-full after:w-full after:absolute after:top-0 after:bg-transparent after:rounded-md">
            <img
              className="w-full h-full rounded-md object-cover flex-auto"
              src={poster_path ? movieImage : image}
              alt={title}
            />
          </div>
          <div>
            <figcaption className="font-bold text-base text-primary mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </figcaption>
            <span className="font-bold text-base text-secondary">
              {releaseDate ? releaseDate : 'Data indisponível'}
            </span>
          </div>
        </figure>
      </Link>
    </div>
  );
};

export default MovieCard;
