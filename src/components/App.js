import './styles/app.css'
import React, { Component, useState } from 'react'
import Button from './Button.js'
import "./styles/app.css";

  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

function App() {

  const colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]

  const [Colores, setColores] = useState(colors)


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function cambiarColores() {
  setColores(shuffle(colors))

}


  return (

    <div className="container">
        <div className="panel">
          {Colores.map(color =>
          <div key={color} className={color}>{color}</div>
          )}
        </div>
        <Button fn={cambiarColores} />

    </div>

  )
}

export default App;