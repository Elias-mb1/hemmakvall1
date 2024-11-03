// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import TagManager from 'react-gtm-module';

// Initialize Google Tag Manager with your container ID
const tagManagerArgs = {
  gtmId: 'GTM-5F9WL5XH' // Replace with your GTM ID
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

