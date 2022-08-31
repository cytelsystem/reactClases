import React from 'react';

import api from '../api'; // importar api.js para hacer una llamada a la api



class BadgeNew extends React.Component {

  prueba = {
    formica: {
      nombre: 'Hector',
      apellido: 'moreno rodriguez'
    },
  };

  handleSubmit = async e => { // metodo handleSubmit
    await api.badges.create(this.prueba.formica);

  };

  render() {
    return (
      <>
      <button  onClick={this.handleSubmit}>GUARDAR</button>
      </>
    );
  }
}

export default BadgeNew;
