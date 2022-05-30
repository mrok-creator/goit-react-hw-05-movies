import { useState, useEffect, useCallback } from 'react';

import SearchBar from './SearchBar';
import MoviesList from 'shared/component/MoviesList';
import { searchFilmByName } from 'shared/servise/moviesApi';

function MoviesSearch() {
  const [state, setState] = useState({
    movies: [],
    isLoading: false,
    error: null,
  });

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        return;
      }
      setState({ ...state, isLoading: true, error: null });

      const { results } = await searchFilmByName(query);
      try {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          movies: [...results],
        }));
      } catch (error) {
        setState({ ...state, isLoading: false, error: error.message });
      }
    };
    fetchMovies();
  }, [query]);

  const setMovie = useCallback(
    q => {
      setQuery(q);
      setState(prevState => ({ ...prevState, movies: [] }));
    },
    [setQuery, setState]
  );

  const { movies, isLoading, error } = state;

  return (
    <>
      <SearchBar onSubmit={setMovie} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {Boolean(movies.length) && <MoviesList items={movies} />}
    </>
  );
}

export default MoviesSearch;
