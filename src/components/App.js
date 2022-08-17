import React from 'react';
import data from '../data/data';
import styled from 'styled-components';


function App() {

  const H1Saludo = styled.h1`
  color: red;
  text-align: center;
  `


  return (
    <div>
      {data.map((data, index) =>
        <H1Saludo key={index}>{data}</H1Saludo>)}
    </div>

  )
}

export default App;