import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { MOVIE_TRAILER_GET } from '../../api/api';
import MovieTitle from './MovieTitle';

const MovieVideoTrailer = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
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
  }, [request, id]);

  if (data)
    return (
      <>
        {trailer && (
          <section className="content pt-10">
            <div className="container">
              <MovieTitle title="Trailer" />
              <div className="w-[80%] h-[70vh]">
                <iframe
                  className="w-full h-full rounded-md"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                ></iframe>
              </div>
            </div>
          </section>
        )}
      </>
    );
  else return null;
};

export default MovieVideoTrailer;
