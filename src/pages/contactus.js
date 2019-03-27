import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/portofolio.css';




class ContactUs extends Component {
   
    render() {
        // if (this.props.is_login === false){
        //     return <Redirect to ={{ pathname: "/signin"}} />;
        // }else{
            return (
                <div>
                <div className="container-fluid">
                    <div className="row">
                    <Header />
                    </div>
                </div>
                <div className="text-center">
                    <form className="form-signin">
                        <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please give your feedback</h1>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                        <textarea type="textarea" id="inputPassword" className="form-control" placeholder="Write your feedback here" required id="Bio" cols="30" rows="10"></textarea><br/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit your feedback</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <Footer />
                    </div>
                </div>
                </div>
                );
        }
        
    }
export default connect(
    "is_login, full_name, email, username", actions)
    (withRouter(ContactUs))
