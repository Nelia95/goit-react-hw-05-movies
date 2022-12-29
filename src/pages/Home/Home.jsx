import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrending } from '../../apiMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import style from './Home.module.css';

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
      <h2 className={style.title}>Trending Movies</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
