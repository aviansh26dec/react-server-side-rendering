import React, { Component } from 'react';

class FrontLayout extends Component {
	
	render(){
		const Component = this.props.component;
    	const route = this.props.route;
		return (
			<React.Fragment>
				<Component route={route} />
			</React.Fragment>
		)
	}

}

export default FrontLayout;