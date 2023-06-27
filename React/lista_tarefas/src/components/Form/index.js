import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({ handleSubmit, atualizaInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={atualizaInput} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  atualizaInput: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
