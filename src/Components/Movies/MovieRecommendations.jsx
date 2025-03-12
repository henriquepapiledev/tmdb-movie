import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { MOVIE_RECOMMENDATIONS_GET } from '../../api/api';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieRecommendations = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    const getMovieRecommendations = async () => {
      const { url, options } = MOVIE_RECOMMENDATIONS_GET(id);
      const { json } = await request(url, options);
      setRecommendations(json.results?.slice(0, 6));
    };
    getMovieRecommendations();
  }, [request, id]);

  if (data)
    return (
      <>
        {recommendations.length === 0
          ? 'Recomendações indisponível'
          : recommendations.map((recommendation) => (
              <MovieCard
                key={recommendation.id}
                id={recommendation.id}
                poster_path={recommendation.poster_path}
                title={recommendation.title}
                release_date={recommendation.release_date}
              />
            ))}
      </>
    );
  else return null;
};

export default MovieRecommendations;
