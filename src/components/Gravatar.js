import React from 'react';
import md5 from 'md5'; // importar la libreria que fue instalada con npm install md5

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
  const email = props.email; // recibir el props con el email
  const hash = md5(email); // transformarlo en un codigo md5

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} // colocar el hash obtenido
      alt="Avatar"
    />
  );
}

export default Gravatar;
