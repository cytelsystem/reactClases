import React from 'react';
import api from '../api'; // importar api.js para hacer una llamada a la api

import Form from '../components/Form';



class BadgeNew extends React.Component {


  state = {
    form:     {
      id: '',
      link: [
        {
          nombre: ""
        }
      ]

    },
  };


  // prueba = () => {

  //   this.state1.form.link.push(`nombre: this.state.form.nombre, link: this.state.form.nombreLink`)
  // };

  handleChange = e => {

    this.setState({
      form: {
        nombre: e.target.value,
        link: [
          {
            [e.target.name]: e.target.value,
          }
        ]
      },
    });

  };

  // handleChange = e => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };


  handleSubmit = async e => { // metodo handleSubmit
    e.preventDefault();
    await api.prueba.create(this.state.form);

  };

  render() {
    return (
      <>
      <Form onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
      </>
    );
  }
}

export default BadgeNew;
