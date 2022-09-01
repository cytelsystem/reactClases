
import { useState } from 'react';
import api from '../api'; // importar api.js para hacer una llamada a la api
import Form from '../components/Form';



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
        <form onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>Guardar jSon</h2>
            </div>

            <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="nombre"
                />
              </div>
            <div className="form-group">
                <label>Nombrelink</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="nombreLink"
                />
              </div>

            <button type="submit">Registrar Usuario</button>
          </form>

        </>

    );

}

export default FcGuardarDatos;
