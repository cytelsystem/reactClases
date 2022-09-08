
import { endpoint, endpointTodo} from '../api';
import { useEffect, useState } from 'react';

const Personajes = () => {

  console.log(endpointTodo)


  useEffect(() => {
    // endpointTodo().then((data) => {
    //   console.log(data)

    // })
  }, [])





  return <h1>prueba Personajes</h1>

}

export default Personajes;