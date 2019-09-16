import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
