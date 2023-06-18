//MAIN.JSX 
//importar REACT 
import React from 'react';
//importar REACT-DOM
import * as ReactDOM from 'react-dom/client';
//importar css
import './index.css';
//importo app que es donde tendremos la aplicacion con lo que queremos renderizar
import App from './App'

//ARCHIVO PRINCIPAL, PODRIA SER TMB UN INDEX.JS

const root = ReactDOM.createRoot(document.getElementById('root')); //donde queremos renderizar nuestra aplicacion en el HTML
root.render(<App/>); //lo que queremos renderizar //mostrar por pantalla

