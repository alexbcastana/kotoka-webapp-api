import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import IdentifyBerry from './components/IdentifyBerry';
import RegisterForm from './components/RegisterForm'

const Routes = (props) => (
   <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/identifyBerry' component={IdentifyBerry} />
      <Route path='/register' component={RegisterForm} />
      <Redirect to='/' />
   </Switch>
);

export default Routes;
