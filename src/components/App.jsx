import { Routes, Route } from 'react-router-dom';

import LayOut from './LayOut';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
