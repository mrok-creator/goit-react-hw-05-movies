import FilmOption from 'components/FilmOption';

import s from './movieDetailsPage.module.css';

const MovieDetailsPage = () => {
  return (
    <div className={s.container}>
      <FilmOption />
    </div>
  );
};

export default MovieDetailsPage;
