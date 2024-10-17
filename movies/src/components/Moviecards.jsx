import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoritesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-auto rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{movie.Title} ({movie.Year})</h3>
      <button
        onClick={handleAddFavorite}
        className="mt-2 p-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors w-full"
      >
        Lägg till i Favoriter
      </button>
    </div>
  );
};

export default MovieCard;
