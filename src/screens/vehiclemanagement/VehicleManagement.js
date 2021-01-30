import React, { Component, Fragment } from 'react';
import Header from '../../common/header/Header';
import VehicleDetails from './VehicleDetailsTable';

export class VehicalManagement extends Component {

    constructor(props) {
        super(props);
        if (!sessionStorage.getItem('login')) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Fragment>
                <Header isLoggedIn={sessionStorage.getItem('login')} {...this.props} />
                <div style={{ width: '75%', margin: 'auto', marginTop: '10rem', marginBottom: '10rem' }}>
                    <VehicleDetails />
                </div>
            </Fragment>
        )
    }
}

export default VehicalManagement
