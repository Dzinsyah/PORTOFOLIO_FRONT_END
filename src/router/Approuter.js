import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navigation from '../components/navigation';
import MainRoute from './Mainrouter';
import {connect} from "unistore/react";
import {actions} from '../components/store';
// import Header from '../components/header';

class AppRouter extends Component {

    render(){
        return(
            <div className ="App">
                {/* <Header postSignout = {this.postSignout}/> */}
                <MainRoute />
            </div>
        );
    }
}

export default connect(
    "is_login, full_name, email", actions
)(withRouter(AppRouter))