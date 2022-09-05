
import { useState, useEffect } from 'react';
import api from '../api';
import FormJson from '../components/FormJson';

const FcGuardarDatos = () => {

  const [nombrecompleto, setNombre] = useState('')
  const [detalle, setDetalle] = useState('')
  const [link1, setLink1] = useState('')
  const [archivo1, setArchivo1] = useState('')
  const [link2, setLink2] = useState('')
  const [archivo2, setArchivo2] = useState('')

  const linkArray = [];






  const handleChange = (e) => {
    const setter = getSetter(e.target.name)
    setter(e.target.value)
  };


  const handleSubmit = async e => {

    e.preventDefault();

    const payload = {
      id: '',
      nombrecompleto,
      detalle,
      link: [


      ]
    }


    if (link1){
      const nombre = link1;
      const archivo = archivo1;
      {payload.link.push({nombre, archivo})}
    }
    if (link2){
      const nombre = link2;
      const archivo = archivo2;
      {payload.link.push({nombre, archivo})}
    }



    await api.prueba.create(payload);

  };


  const getSetter = function (controlName) {
    switch (controlName) {
      case 'nombre': return setNombre
      case 'detalle': return setDetalle
      case 'link1': return setLink1
      case 'archivo1': return setArchivo1
      case 'link2': return setLink2
      case 'archivo2': return setArchivo2
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
