import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieInfo } from 'shared/servise/moviesApi';

import s from './filmOption.module.css';

function FilmOption() {
  const { id } = useParams();
  const [film, setFilm] = useState({
    items: {},
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    const fetchMoviesInfo = async () => {
      setFilm(prevFilm => ({ ...prevFilm, isLoading: true }));
      const results = await getMovieInfo(id);

      try {
        setFilm(prevFilm => ({
          ...prevFilm,
          items: { ...results },
          isLoading: false,
        }));
      } catch (error) {
        setFilm(prevFilm => ({
          ...prevFilm,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    fetchMoviesInfo();
  }, []);

  const { items, isLoading, error } = film;

  const { vote_average, overview, genresName, poster_path } = items;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';
  const title = items.original_name || items.original_title;
  const isRender = Boolean(Object.values(items).length > 0);

  return (
    <>
      {isRender && (
        <>
          <h2 className={s.title}>{title}</h2>
          <div className={s.wrapper}>
            <img src={image} alt={title} />
            <div className="description">
              <p> User score: {vote_average * 10}%</p>
              <p>
                <span>Overview</span>
                <span> {overview}</span>
              </p>
              <p>
                <span>Genres</span>
                <span> {genresName}</span>
              </p>
            </div>
          </div>
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default FilmOption;
