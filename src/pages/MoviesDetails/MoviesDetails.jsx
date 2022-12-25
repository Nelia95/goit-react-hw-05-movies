import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '..//../apiMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMovieDetails(Number(movieId));
        console.log(response);
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <div>
          <div>
            <NavLink to={location?.state?.from ?? '/'}> ⇦ Go back</NavLink>
            <img src={details.img} alt={details.title} />
          </div>
          <div>
            <h2>
              {details.title} ({details.releaseDate})
            </h2>
            <p>User score: {details.vote}</p>
            <h2>Overview</h2>
            <p>{details.about}</p>
            <h2>Genres</h2>
            <p>{details.genre}</p>
          </div>
        </div>
      )}
      <div>
        <h2>Additional information</h2>
        <ul>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetails;
