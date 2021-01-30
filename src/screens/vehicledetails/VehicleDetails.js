import React, { Component, Fragment } from 'react';
import Header from '../../common/header/Header';
import DetailsTable from './DetailsTable';

class VehicleDetails extends Component {
    render() {
        return (
            <Fragment>
                <Header isLoggedIn={sessionStorage.getItem('login')} />
                <div style={{ marginTop: '8rem', marginBottom: '5rem', display: 'flex', justifyContent: 'center' }}>
                    <DetailsTable />
                </div>
            </Fragment>
        )
    }
}

export default VehicleDetails
