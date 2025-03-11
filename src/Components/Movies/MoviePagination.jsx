import { NavLink } from 'react-router-dom';
import styles from './MoviePagination.module.css';
import Arrow from '../../assets/icon-arrow.svg?react';

const MoviePagination = () => {
  const buttonsPagination = [1, 2, 3, 4, 5];

  return (
    <ul
      className={`${styles.moviePagination} flex justify-center items-center gap-2 mt-20`}
    >
      {buttonsPagination.map((num) => (
        <li key={num}>
          <NavLink
            className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
            to={`p=${num}`}
          >
            {num}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviePagination;
