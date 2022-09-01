import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FcGuardarDatos from './pages/FcGuardarDatos';



function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={FcGuardarDatos} />
          <Route exact path="/reactClases" component={FcGuardarDatos} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;