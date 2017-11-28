import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

const Routes = (props) => (
    <Route path='/' exact component={ Home } />
);

export default Routes;
