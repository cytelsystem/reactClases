

  // const App = React.createElement('h1', null, 'Hola Mundo!');

  const App = React.createElement("div",null, [

      React.createElement("h1", {key: 1}, "Con lo visto hasta ahora"),
      React.createElement("h2", {key: 2}, "Replica este HTML"),
      React.createElement("h3", {key: 3}, "Usando"),
      React.createElement("h4", {key: 4}, "React.js"),
      React.createElement("footer", {key: 5}, "Suerte!")

  ]
  );


  const contenedor = document.getElementById('root');

  const root = ReactDOM.createRoot(contenedor);
  root.render(App);




