import React, { Component, Fragment } from 'react';

import { Route, Switch } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import VehicalDetails from './vehicaldetails/VehicalDetails';
import VehicalManagement from './vehicalmanagement/VehicalManagement';

class VehitoController extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/vehical/:vehicalMode' render={(props) => <VehicalDetails {...props} />}/>
                    <Route exact path='/user/vehical/management' component={VehicalManagement} />
                </Switch>
            </Fragment>
        )
    }
}

export default VehitoController
