import { HiOutlineSearchCircle } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchMoviesWithQuery } from '../../apiMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSubmit = e => {
    e.preventDefault();

    setSearchQuery(
      e.currentTarget.elements.searchQuery.value.toLowerCase().trim()
    );
    setSearchParams({
      query: e.currentTarget.elements.searchQuery.value.toLowerCase().trim(),
    });
  };

  console.log(searchParams);
  const currentQuery = searchParams.get('query');
  console.log(currentQuery);

  useEffect(() => {
    if (!currentQuery) {
      console.log('nety');
    }
  }, [currentQuery]);

  useEffect(() => {
    if (searchQuery !== '') {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesWithQuery(searchQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    } else if (currentQuery) {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesWithQuery(currentQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    }

    return;
  }, [searchQuery, currentQuery]);

  return (
    <>
      <div onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
        <button type="submit">
          <HiOutlineSearchCircle size="35" color="#fff" />
        </button>
      </div>
      {!error ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No results found for '{searchQuery}'</p>
      )}
    </>
  );
};
export default Movies;
