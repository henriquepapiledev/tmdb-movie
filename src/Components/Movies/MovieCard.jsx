import { Link } from 'react-router-dom';
import image from '../../assets/no-image.jpg';
import { useEffect, useState } from 'react';

const MovieCard = ({ id, poster_path, title, release_date }) => {
  const movieImage = 'https://image.tmdb.org/t/p/original' + poster_path;
  const [releaseDate, setReleaseDate] = useState(null);

  function formatDate(dataString) {
    if (!dataString) return '';
    const [year, month, day] = dataString.split('-');
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    setReleaseDate(formatDate(release_date));
  }, [setReleaseDate]);

  return (
    <div>
      <Link to={`/filme/${id}`}>
        <figure id={id}>
          <img
            className="w-full rounded-md object-cover h-[336px]"
            src={poster_path ? movieImage : image}
            alt={title}
          />

          <figcaption className="font-bold text-base text-primary mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </figcaption>
          <span className="font-bold text-base text-secondary">
            {releaseDate}
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default MovieCard;
