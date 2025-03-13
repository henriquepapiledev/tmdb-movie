import { useState } from 'react';
import MovieList from '../components/Movies/MovieList';
import MovieListCategory from '../components/Movies/MovieListCategory';
import MoviePagination from '../components/Movies/MoviePagination';
import Head from '../helper/Head';

const Home = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <>
      <Head
        title="The Movie Database (TMDB)"
        description="Home do site The Movie Database."
      />
      <section className="topo">
        <div className="bg-secondary-color pt-10 pb-10 lg:pt-21 lg:pb-21">
          <div className="container">
            <h1 className="font-bold text-2xl lg:text-5xl text-white lg:text-center lg:leading-14 max-w-3xl m-auto">
              Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </h1>
            <div className="mt-9 lg:mt-10">
              <p className="font-bold text-sm text-white lg:text-center uppercase">
                Filtre por:
              </p>
              <MovieListCategory
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="content pt-8 pb-8">
        <div className="container">
          <MovieList
            selectedGenres={selectedGenres}
            currentPage={currentPage}
            setTotalPages={setTotalPages}
          />
          <MoviePagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
