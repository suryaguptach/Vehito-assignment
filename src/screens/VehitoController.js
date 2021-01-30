import React, { Component, Fragment } from 'react';

import { Route, Switch } from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import VehicleDetails from './vehicledetails/VehicleDetails';
import VehicleManagement from './vehiclemanagement/VehicleManagement';

class VehitoController extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' render={(props) => <Home {...props} />} />
                    <Route exact path='/dashboard' render={(props) => <Dashboard {...props} />} />
                    <Route exact path='/user/vehicle/management' render={(props) => <VehicleManagement {...props} />} />
                    <Route exact path='/vehicle/:vehicleMode' render={(props) => <VehicleDetails {...props} />}/>
                </Switch>
            </Fragment>
        )
    }
}

export default VehitoController
