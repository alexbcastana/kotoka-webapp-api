import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import IdentifyBerry from './containers/IdentifyBerry';

const Routes = (props) => (
    <Switch>
        <Route exact path='/' exact component={ Home } />
        <Route path='/identifyBerry' component={ IdentifyBerry } />
    </Switch>
);

export default Routes;
