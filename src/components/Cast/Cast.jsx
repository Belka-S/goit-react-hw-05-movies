import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servises/movieApi';
import { normalizeMovieCast } from 'servises/normalize';
import css from 'styles/AllStyles.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetch() {
      const movieCredits = await fetchMovieCredits(movieId);
      const movieCast = normalizeMovieCast(movieCredits.cast);
      setCast(movieCast);
    }
    fetch();

    return () => controller.abort();
  }, [movieId]);

  return (
    <ul className={css.Cast}>
      {cast.map(({ name, character, photo }) => (
        <li key={name}>
          <p>{name}</p>
          <img src={photo} width="150" alt={name} />
          <p>
            Character: <br /> {character}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
