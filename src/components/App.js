import React from 'react';

function App() {

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {numeros.map(numero => (
        <React.Fragment key={numero}>
          <span>No</span>
          <p>{numero}</p>
        </React.Fragment>
      ))}
    </>

  )

}

export default App;