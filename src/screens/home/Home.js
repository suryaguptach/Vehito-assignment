import React, { Component, Fragment } from 'react'
import Header from '../../common/header/Header';
import CustomCard from './CustomCard';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header isLoggedIn={sessionStorage.getItem('login')} />
                <div style={{ marginTop: '6rem' }}>
                    <CustomCard />
                </div>
            </Fragment>
        )
    }
}

export default Home
