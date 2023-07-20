/* eslint-disable import/no-extraneous-dependencies */
import { legacy_createStore as createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

// reducer que irá ouvir ações e criar novos estados
// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
