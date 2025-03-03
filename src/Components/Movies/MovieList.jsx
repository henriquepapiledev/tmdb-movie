import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <div className="movie-list grid grid-cols-6 gap-8 gap-y-12">
      <MovieCard />
    </div>
  );
};

export default MovieList;
