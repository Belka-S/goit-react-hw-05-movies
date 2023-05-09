import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const movies = ['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'];

  return (
    <main>
      <h2>Tranding Today</h2>
      <ul>
        {movies.map(el => (
          <li key={el}>
            <Link to={`movies/${el}`} state={{ from: location }}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
