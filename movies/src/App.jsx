import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/Searchbarr';
import FavoritesList from './components/FavoritesList';

const App = () => (
  <Provider store={store}>
    <Router> {/* Ensure that your app is wrapped in a Router */}
      <nav>
        <Link to="/">Hem</Link> {/* Ensure all Links are inside the Router */}
        <Link to="/favorites" className="ml-4">Sparade Favoriter</Link> {/* Add margin for spacing */}
      </nav>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
