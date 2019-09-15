import React from 'react';
import { Switch, Route } from 'react-router';
import _ from "lodash";

import FrontRoute from './routes/FrontRoute';
import FrontLayout from './layout/FrontLayout';
import Home from './pages/homePageComponent';

class App extends React.Component {
	render(){
		return(
			<Switch>
				{_.map(FrontRoute, (route, key) => {
	              const { component, path } = route;
	              return (
	                <Route
	                  exact
	                  path={path}
	                  key={key}
	                  render={route => (
	                    <FrontLayout
	                      component={component}
	                      route={route}
	                    />
	                  )}
	                />
	              )
	            })}
			</Switch>
		)
	}
}

export default App;