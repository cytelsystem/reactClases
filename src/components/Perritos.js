import React from 'react';
import './styles/perrito.scss';

function Perritos(props) {

  const data = props.data;

    return (
        <div className="stylePerrito">
            {data.result.map(detalle => {
              return (
                <React.Fragment  key={detalle.id}>
                  <h2>Nombre: {detalle.nombre}</h2>
                  <ul>
                    <li>Edad: {detalle.edad}</li>
                    <li>Sexo: {detalle.sexo}</li>
                    <li>Raza: {detalle.raza}</li>
                    <li>Tamaño: {detalle.tamano}</li>
                  </ul>
                </React.Fragment>
              )
            })}
        </div>
    )

}

export default Perritos;