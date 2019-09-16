import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import _ from "lodash";

import FrontRoute from '../routes/FrontRoute';
import FrontLayout from '../layout/FrontLayout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
