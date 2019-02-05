import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

import React from 'react';
import { render } from 'react-dom';
import {
    Route,
    Switch,
    Router
} from 'react-router-dom';
import browserHistory from './history.js';

import Home from './views/home';
import ExamplePage from './views/example-page';

render((
    <Router history={browserHistory}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/example' component={ExamplePage} />
        </Switch>
    </Router>
),document.getElementById('app'));