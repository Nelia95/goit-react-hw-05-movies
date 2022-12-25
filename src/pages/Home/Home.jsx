import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrending } from '../../apiMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const movies = await fetchTrending();
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountries();
  }, []);
  return (
    <div>
      <title>Trending Movies</title>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
