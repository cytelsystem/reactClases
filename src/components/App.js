import React from 'react';


const url = "https://benjumeacarlos981.github.io/multicarga/configuracion.json";


fetch(url)
.then(respuesta => {
  return respuesta.json()

})
.then(datos => {

  App(datos);

})


function App (datos) {
  console.log(datos.contacto.celular)
  return (
    <h1>prueba</h1>


  )



}


export default App;