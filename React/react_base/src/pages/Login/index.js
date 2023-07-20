import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem Sim</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
