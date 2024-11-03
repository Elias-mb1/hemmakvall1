//searchbarr.jsx
import React, { useState } from 'react';
import MovieList from './Movielist';

const API_KEY = 'ae6ea0af'; // Your API key

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError('Något gick fel med API-anropet');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sök efter film</h2>
        <input
          type="text"
          placeholder="Sök efter film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
        >
          Sök
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {movies && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default SearchBar;
