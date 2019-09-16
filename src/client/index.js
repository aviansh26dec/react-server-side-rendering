import React from 'react';
import ReactDOM from 'react-dom';
import ClientApp from './ClientApp';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../assets/style.css';


ReactDOM.hydrate(<ClientApp />, document.getElementById('root'));

