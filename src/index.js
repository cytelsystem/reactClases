import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import './global.scss';

// import App from '../src/components/App';
import App from '../src/components/UseApi';

const contenedor = document.getElementById('root');

const root = ReactDOM.createRoot(contenedor);
root.render(<App />);