import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { MOVIE_AGE_RANGE_GET } from '../../api/api';

const MovieAgeRange = () => {
  const { id } = useParams();
  const { data, request } = useFetch();
  const [age, setAge] = useState(null);

  function getContentRating(releaseData) {
    const COUNTRY_CODE_BR = 'BR';
    const RATING_UNAVAILABLE = 'Classificação não disponível';
    const MAX_RELEASE_DATES_TO_CHECK = 3;
    const LIVRE_RATING = 'L';

    const brazilRelease = releaseData.find(
      (country) => country.iso_3166_1 === COUNTRY_CODE_BR,
    );

    if (!brazilRelease?.release_dates?.length) {
      return RATING_UNAVAILABLE;
    }

    const validReleaseDates = brazilRelease.release_dates.slice(
      0,
      MAX_RELEASE_DATES_TO_CHECK,
    );
    const certification = validReleaseDates.find(
      (date) => date.certification,
    )?.certification;

    if (certification === LIVRE_RATING) {
      return LIVRE_RATING;
    }

    return certification ? `${certification} anos` : RATING_UNAVAILABLE;
  }

  useEffect(() => {
    const getMovieAgeRange = async () => {
      const { url, options } = MOVIE_AGE_RANGE_GET(id);
      const { json } = await request(url, options);
      setAge(getContentRating(json.results));
    };
    getMovieAgeRange();
  }, [request, id, setAge]);

  if (data) return <>{age}</>;
  else return null;
};

export default MovieAgeRange;
