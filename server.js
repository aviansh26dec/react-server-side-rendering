import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
import store from './src/redux/store';

import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3021;
const IP_ADRESS = 'localhost';

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

app.get('*', (req, res) => {
	const content = renderToString(
    	<Provider store={store}>
	      <StaticRouter>
	        <App />
	      </StaticRouter>
	    </Provider>
	);
	const helmet = Helmet.renderStatic();

	const html = `
	<html>
		<head>
			<base href="/" />
			<meta charset="utf-8" />
			${helmet.title.toString()}
			${helmet.meta.toString()}
		</head>
		<body>
			<div id="root">${content}</div>
			<script src="client.bundle.js"></script>
		</body>
	</html>
	`;
	res.send(html);
})

app.listen(
  PORT,
  IP_ADRESS,
  () => console.log(`
    =====================================================
    -> Server (SSR) 🏃 (running) on ${IP_ADRESS}:${PORT}
    =====================================================
  `)
);