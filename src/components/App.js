import React from 'react';


const url = "https://benjumeacarlos981.github.io/multicarga/configuracion.json";

const datos1 = "";

function prueba(datos){
  datos1 = datos;

}

fetch(url)
.then(respuesta => {
  return respuesta.json()

})
.then(datos => {

  prueba(datos);

})


function App () {

  console.log(datos1)


  return (
    <h1>prueba</h1>


  )



}


export default App;