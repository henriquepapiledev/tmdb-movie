import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { MOVIE_TRAILER_GET } from '../../api/api';

const MovieVideoTrailer = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const { url, options } = MOVIE_TRAILER_GET(id);
    request(url, options);
  }, [request, id]);

  if (data)
    return (
      <div className="w-[80%] h-[70vh]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/fgjLBp49Mqk"
        ></iframe>
      </div>
    );
  else return null;
};

export default MovieVideoTrailer;
