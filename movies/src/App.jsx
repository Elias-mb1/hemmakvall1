import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/Searchbarr';
import FavoritesList from './components/FavoritesList';
import { Helmet } from 'react-helmet';

const App = () => (
  <Provider store={store}>
    <Helmet>
      <title>Filmtjänst</title>
      <meta name="description" content="Sök och spara dina favoritfilmer." />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Router>
      <nav>
        <Link to="/favorites">Sparade Favoriter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;


