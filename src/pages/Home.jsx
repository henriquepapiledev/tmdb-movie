import MovieList from '../components/Movies/MovieList';
import MovieListCategory from '../components/Movies/MovieListCategory';
import MoviePagination from '../components/Movies/MoviePagination';

const Home = () => {
  return (
    <>
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
              <MovieListCategory />
            </div>
          </div>
        </div>
      </section>
      <section className="content pt-8 pb-8">
        <div className="container">
          <MovieList />
          <MoviePagination />
        </div>
      </section>
    </>
  );
};

export default Home;
