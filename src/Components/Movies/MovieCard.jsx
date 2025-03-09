import { Link } from 'react-router-dom';
import image from '../../assets/no-image.jpg';

const MovieCard = ({ id, poster_path, title, release_date }) => {
  const movieImage = 'https://image.tmdb.org/t/p/original' + poster_path;

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
          <span className="font-bold text-sm text-secondary">
            {release_date}
          </span>
        </figure>
      </Link>
    </div>
  );
};

export default MovieCard;
