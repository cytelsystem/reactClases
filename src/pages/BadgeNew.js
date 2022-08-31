import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api'; // importar api.js para hacer una llamada a la api
import md5 from 'md5'; // importar la libreria que fue instalada con npm install md5


class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: '', // Inicializar la informacion en blanco ""
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };



  handleSubmit = async e => { // metodo handleSubmit
    e.preventDefault(); // se detiene para no mostrar lo que se envia en el URL del navegador
    this.setState({ loading: true, error: null });

    let email = this.state.form.email;
    let hash = md5(email);
    this.setState({ avatarUrl: 'prueba' });

    try {
      this.state.form.avatarUrl = `https://s.gravatar.com/avatar/${hash}?d=identicon`;
      await api.badges.create(this.state.form); // usamos la api para crear los datos que entan en state.form
      this.setState({ loading: false }); // Si todo funciono bien ponemos loading: false
    } catch (error) { // Si hay error ponemos loading: false y en error guardamos el error
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl={`https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon`}

              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit} // envia props al componente BadgeForm con el metodo handleSubmit
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
