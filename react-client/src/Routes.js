import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import IdentifyBerry from './components/IdentifyBerry';

const Routes = (props) => (
    <Switch>
        <Route exact path='/' exact component={ Home } />
        <Route path='/identifyBerry' component={ IdentifyBerry } />
    </Switch>
);

export default Routes;
