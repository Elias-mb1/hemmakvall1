import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Mina Favoritfilmer</h2>

      <Link
        to="/"
        className="mb-6 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
      >
        Hem
      </Link>

      {favoriteMovies.length === 0 ? (
        <p className="text-lg text-gray-700">Inga favoritfilmer än.</p>
      ) : (
        favoriteMovies.map((movie) => (
          <div key={movie.imdbID} className="p-4 mb-4 bg-white shadow-md rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <button
              onClick={() => dispatch(removeFavorite(movie.imdbID))}
              className="mt-2 p-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
            >
              Ta bort
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
