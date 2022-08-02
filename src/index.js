import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.scss';

import App from '../src/components/App';

const contenedor = document.getElementById('root');

ReactDOM.render(<App />, contenedor);