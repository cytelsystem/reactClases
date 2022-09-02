
import { useState } from 'react';
import api from '../Api'; // importar api.js para hacer una llamada a la api
import FormJson from '../components/FormJson';



const FcGuardarDatos = () => {

  const [nombre, setNombre] = useState('')
  const [nombreLink, setNombreLink] = useState('')


  const handleChange = (e) => {
    const setter = getSetter(e.target.name)
    setter(e.target.value)
    const valid = [nombre, nombreLink].every(v => v.length > 0)

  };


  const handleSubmit = async e => {

    e.preventDefault();

    const payload = {
      id: '',
      nombre,
      link: [
        {
          nombreLink
        }
      ]

    }

    await api.prueba.create(payload);

  };


  const getSetter = function (controlName) {
    switch (controlName) {
      case 'nombre': return setNombre
      case 'nombreLink': return setNombreLink
      default: return () => {}
    }
  }


    return (
      <>
          <FormJson handleSubmit={handleSubmit} handleChange={handleChange} />

      </>
    );

}

export default FcGuardarDatos;
