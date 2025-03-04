import { Link } from 'react-router-dom';
import foto from '../../assets/filme.png';

const MovieCard = ({ poster_path, title, release_date }) => {
  const movieImage = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <Link to="/">
        <figure>
          <img
            className="w-full rounded-md"
            src={`${movieImage}${poster_path}`}
            alt={title}
          />
          <figcaption className="font-bold text-base text-primary mt-2">
            {title}
          </figcaption>
          <span className="font-bold text-sm text-secondary">
            {release_date}
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default MovieCard;
