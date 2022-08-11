import React from 'react';

function Perritos(props) {

  const data = props.data;

    return (
        <div>
            {data.result.map(detalle => {
              return (
                <div  key={detalle.id}>
                  <h2>Nombre: {detalle.nombre}</h2>
                  <ul>
                    <li>Edad: {detalle.edad}</li>
                    <li>Sexo: {detalle.sexo}</li>
                    <li>Raza: {detalle.raza}</li>
                    <li>Tamaño: {detalle.tamano}</li>
                  </ul>
                </div>
              )
            })}
        </div>
    )

}

export default Perritos;