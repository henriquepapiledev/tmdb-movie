import React, { useEffect, useState } from 'react';
import { MOVIE_CATEGORY_GET } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import Close from '../../assets/icon-close-circle.svg?react';

const MovieListCategory = ({
  selectedGenres,
  setSelectedGenres,
  setCurrentPage,
}) => {
  const { data, loading, error, request } = useFetch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { url, options } = MOVIE_CATEGORY_GET();
      const { json } = await request(url, options);
      setGenres(json.genres);
    };
    fetchGenres();
  }, [request]);

  const handleGenreClick = (genreId) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId],
    );
    setCurrentPage(1);
  };

  if (data)
    return (
      <div className="flex flex-wrap gap-3 lg:justify-center max-w-5xl mt-4 m-auto">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className={`flex px-4 py-2 rounded-md text-sm font-bold hover:bg-tertiary-color hover:text-white transition duration-150 ease-in-out cursor-pointer ${
              selectedGenres.includes(genre.id)
                ? 'bg-tertiary-color text-white'
                : 'bg-white text-black'
            }`}
          >
            {genre.name}
            {selectedGenres.includes(genre.id) && (
              <span className="ml-2">
                <Close />
              </span>
            )}
          </button>
        ))}
      </div>
    );
  else return null;
};

export default MovieListCategory;
