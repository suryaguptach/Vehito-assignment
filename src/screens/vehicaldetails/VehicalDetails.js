import React, { Component, Fragment } from 'react';
import Header from '../../common/header/Header';
import DetailsTable from './DetailsTable';

class VehicalDetails extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div style={{ marginTop: '8rem', marginBottom: '5rem', display: 'flex', justifyContent: 'center' }}>
                    <DetailsTable />
                </div>
            </Fragment>
        )
    }
}

export default VehicalDetails
