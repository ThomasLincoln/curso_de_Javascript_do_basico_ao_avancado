import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem Sim</p>
      <button type="button"> Enviar </button>
    </Container>
  );
}
