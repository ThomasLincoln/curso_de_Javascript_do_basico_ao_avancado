/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Login />
    </>
  );
}

export default App;