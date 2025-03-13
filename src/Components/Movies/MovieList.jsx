import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import MovieCard from './MovieCard';
import { motion } from 'framer-motion';
import { fadeIn } from '../../helper/Motion';
import { MOVIE_AND_CATEGORY_GET } from '../../api/api';
import SkeletonCard from '../../helper/SkeletonCard';

const MovieList = ({ selectedGenres, currentPage, setTotalPages }) => {
  const { data, loading, request } = useFetch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { url } = MOVIE_AND_CATEGORY_GET({
        currentPage,
        selectedGenres,
      });
      const { json } = await request(url);
      setMovies(json.results);
      setTotalPages(json.total_pages);
    };
    fetchMovies();
  }, [selectedGenres, currentPage, setTotalPages]);

  if (data)
    return (
      <motion.div
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        animate={'show'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6"
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            {loading ? (
              <SkeletonCard />
            ) : (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
              />
            )}
          </div>
        ))}
      </motion.div>
    );
  else return null;
};

export default MovieList;
