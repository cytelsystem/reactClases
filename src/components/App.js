import React, { useState } from 'react'
import Button from './Button.js'
import './styles/app.css';


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