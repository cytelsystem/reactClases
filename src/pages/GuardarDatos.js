import React from 'react';
import api from '../api'; // importar api.js para hacer una llamada a la api

import Form from '../components/Form';



class BadgeNew extends React.Component {


  state = {
    form: {

    },
  };

  state1 = {
    form: {
      id: '',
      nombre: ''

    },
  };

  // prueba = () => {

  //   this.state1.form.link.push(`nombre: this.state.form.nombre, link: this.state.form.nombreLink`)
  // };

  // handleChange = e => {



  //   const array = [];
  //   array.push([e.target.name] = e.target.value);
  //   console.log(array);

  //   const nextForm = this.state.ny;
  //   nextForm[e.target.name] = e.target.value;

  //   this.setState({

  //   });

  // };


  handleChange = e => {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

    this.setState1({
      form: {
        id: 10,
        nombre: "carlos"
      },
    });
  };


  handleSubmit = async e => { // metodo handleSubmit
    e.preventDefault();
    await api.prueba.create(this.state1.form);

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
