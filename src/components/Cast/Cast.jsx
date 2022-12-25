import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCast } from '..//../apiMovies';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchCast(Number(movieId));
        console.log(response);
        setCredits(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {credits.length !== 0 ? (
        <ul>
          {credits &&
            credits.map(({ name, profile_path, character, id }) => {
              return (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt={name}
                  />
                  <p>{name}</p>
                  <p>Character: {character} </p>
                </li>
              );
            })}
        </ul>
      ) : (
        <p>We have no information about the actors of this movie</p>
      )}
    </div>
  );
};
export default Cast;
