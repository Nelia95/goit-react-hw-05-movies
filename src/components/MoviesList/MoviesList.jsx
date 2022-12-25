import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(({ id, img, title }) => (
          <Link to={`/movies/${id}`} key={id} state={{ from: location }}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </Link>
        ))}
    </ul>
  );
};
export default MoviesList;
