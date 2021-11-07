import React from 'react';
import {UnconnectedGlobalMenu} from './components/menus/global';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import PANES from './utils/pane-config';
import {Home} from './components/Home';

export default () => {
  const RouteComponents = PANES.map((pane) => {
    return (
      <Route
        component={pane.component}
        exact={pane.key === 'default' ? true : false}
        key={pane.key}
        path={pane.path}
      />
    );
  });

  return (
    <Router>
      <UnconnectedGlobalMenu />
      <Home>
        <Switch>{RouteComponents}</Switch>
      </Home>
    </Router>
  );
};
