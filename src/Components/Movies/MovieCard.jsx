import { Link } from 'react-router-dom';
import foto from '../../assets/filme.png';

const MovieCard = () => {
  return (
    <div>
      <Link to="/">
        <figure>
          <img className="w-full rounded-md" src={foto} alt="Nome do filme" />
          <figcaption className="font-bold text-base text-primary mt-2">
            Nome do filme
          </figcaption>
          <span className="font-bold text-sm text-secondary">12 NOV 2021</span>
        </figure>
      </Link>
    </div>
  );
};

export default MovieCard;
