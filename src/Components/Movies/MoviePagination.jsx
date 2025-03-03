import { NavLink } from 'react-router-dom';
import styles from './MoviePagination.module.css';
import Arrow from '../../assets/icon-arrow.svg?react';

const MoviePagination = () => {
  return (
    <ul
      className={`${styles.moviePagination} flex justify-center items-center gap-2 mt-20`}
    >
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/"
          end
        >
          1
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=2"
        >
          2
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=3"
        >
          3
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=4"
        >
          4
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=5"
        >
          5
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color w-10 h-10 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=next"
        >
          <Arrow />
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex justify-center items-center font-bold text-base text-primary-color h-10 p-2 hover:bg-primary-color hover:text-white transition rounded-md"
          to="/p=last"
        >
          Última
        </NavLink>
      </li>
    </ul>
  );
};

export default MoviePagination;
