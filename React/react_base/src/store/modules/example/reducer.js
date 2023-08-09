/* eslint-disable func-names */
import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// reducer que irá ouvir ações e criar novos estados
// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCESS: {
      console.log('sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisição');
      return state;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro :(');
      return state;
    }

    default: {
      return state;
    }
  }
}
