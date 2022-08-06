import React from 'react';


function Padre(props) {
  return (
    <div style={{width: "75%", background: "#FFEFD5", height: "200px", padding: "20px"}}>
      <h5>Soy un padre</h5>
      {props.children}
    </div>
  )
}

function Hijo1(props) {
  return (
    <div style={{width: "50%", background: "#FA8072", height: "100px", padding: "10px", color: "white", fontSize: "30px"}}>
      <h3>{props.autor}</h3>
    </div>
  )
}

function Hijo2(props) {
  return (
    <div style={{width: "50%", background: "#FA8072", height: "100px", padding: "10px", color: "white", fontSize: "30px"}}>
      <h3>{props.autor}</h3>
    </div>
  )
}

function App() {
  return (
    <Padre>
      <Hijo1 autor="Soy un hijo1"/>
      <Hijo2 autor="Soy un hijo2"/>
    </Padre>
  )
}

export default App;