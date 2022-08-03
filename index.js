

function App() {
  return (
    <div>
      <h1>Con lo visto hasta ahora</h1>
      <h2>Replica este HTML</h2>
      <h3>Usando</h3>
      <h4>React.js</h4>
      <footer>Suerte!</footer>
    </div>
  )
}


const contenedor = document.getElementById('root');

const root = ReactDOM.createRoot(contenedor);
root.render(<App />);




