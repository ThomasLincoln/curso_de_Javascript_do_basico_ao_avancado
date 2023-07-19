/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import History from './services/history';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={History}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
