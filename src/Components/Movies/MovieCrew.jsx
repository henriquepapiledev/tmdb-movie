import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { MOVIE_CREDITS_GET } from '../../api/api';
import { useParams } from 'react-router-dom';

const MovieCrew = () => {
  const { id } = useParams();
  const { data, request } = useFetch();
  const [director, setDirector] = useState('');
  const [writers, setWriters] = useState([]);

  function getContentCrew(data) {
    const foundDirector =
      data.crew.find((person) => person.job === 'Director')?.name ||
      'Não encontrado';
    setDirector(foundDirector);

    const foundWriters = data.crew
      .filter(
        (person) => person.job === 'Screenplay' || person.job === 'Writer',
      )
      .map((writer) => writer.name);
    setWriters(foundWriters.length > 0 ? foundWriters : ['Não encontrado']);
  }

  useEffect(() => {
    const getMovieCrew = async () => {
      const { url, options } = MOVIE_CREDITS_GET(id);
      const { json } = await request(url, options);
      getContentCrew(json);
    };
    getMovieCrew();
  }, [request, id]);

  if (data)
    return (
      <>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <li>
            <p className="font-bold text-base text-white overflow-hidden text-ellipsis whitespace-nowrap">
              {director}
            </p>
            <p className="font-normal text-sm text-white overflow-hidden text-ellipsis whitespace-nowrap">
              Director
            </p>
          </li>
          <li>
            <p className="font-bold text-base text-white overflow-hidden text-ellipsis whitespace-nowrap">
              {writers}
            </p>
            <p className="font-normal text-sm text-white overflow-hidden text-ellipsis whitespace-nowrap">
              Writer
            </p>
          </li>
        </ul>
      </>
    );
  else return null;
};

export default MovieCrew;
