import React, { Component, Fragment } from 'react';
import Header from '../../common/header/Header';
import DashboardCard from './DashboardCard';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Header isLoggedIn={sessionStorage.getItem('login')} />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14.5rem'}}>
                    <DashboardCard />
                </div>
            </Fragment>
        )
    }
}

export default Dashboard
