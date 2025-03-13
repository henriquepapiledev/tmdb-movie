import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { MOVIE_TRAILER_GET } from '../../api/api';
import MovieTitle from './MovieTitle';

const MovieVideoTrailer = () => {
  const { id } = useParams();
  const { data, request } = useFetch();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const getMovieTrailer = async () => {
      const { url, options } = MOVIE_TRAILER_GET(id);
      const { json } = await request(url, options);
      setTrailer(
        json.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube',
        ),
      );
    };
    getMovieTrailer();
  }, [request, id, setTrailer]);

  if (data)
    return (
      <>
        {trailer ? (
          <iframe
            className="lg:basis-4xl aspect-video w-full rounded-md"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <p className="font-normal text-base text-tertiary">
            Trailer indisponível.
          </p>
        )}
      </>
    );
  else return null;
};

export default MovieVideoTrailer;
