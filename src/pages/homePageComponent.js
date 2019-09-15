import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';

class Home extends Component {
	exampleMethod(){
		console.log('JS is running');
	}
	head(){
		return(
			<Helmet>
				<title>Server Side Rendering</title>
			</Helmet>
		)
	}
	render(){
		return(
			<div>
				{this.head()}
				<h1>My Bootstrap home page</h1>
				<p>Some content</p>
				<Button onClick={() => this.exampleMethod()}>console log some text</Button>
			</div>
		)
	}	
}

export default Home;