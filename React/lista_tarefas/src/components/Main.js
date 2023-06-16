/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  state = {
    // novaTarefa: '',
  };

  // atualizaInput = (e) => {
  // this.setState({
  // novaTarefa: e.target.value,
  // });
  // };

  render() {
    // const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input onChange={this.atualizaInput} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Main;
