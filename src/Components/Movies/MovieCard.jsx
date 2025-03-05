import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster_path, title, release_date }) => {
  const movieImage = 'https://image.tmdb.org/t/p/original';

  return (
    <div>
      <Link to={`/filme/${id}`}>
        <figure id={id}>
          <img
            className="w-full rounded-md object-cover min-h-[336px]"
            src={`${movieImage}${poster_path}`}
            alt={title}
          />
          <figcaption className="font-bold text-base text-primary mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
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
