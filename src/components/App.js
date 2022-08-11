import React from 'react';
import Perritos from './Perritos';
import data from '../data/Data.json'


function Veterinaria() {
  return (
    <div>
      <h1>Clientes caninos de Veterinaria </h1>
      <Perritos data={data}/>
    </div>
  );
}

export default Veterinaria;