import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/portofolio.css';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import Header from '../components/header';
import Footer from '../components/footer';
import{ Link } from "react-router-dom";


class SignIn extends Component {
    doLogin = ()  =>{
        this.props.signIn().then(() =>{
            console.log("looogiiin", this);
            this.props.history.push("/myproduct");
        });
    };
    render(){
        return(

        <div>
        <div className="container-fluid">
            <div className="row">
            <Header />
            </div>
        </div>
        <body className="text-center">
            <form className="form-signin" onSubmit={e => e.preventDefault()}>
                <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputusername" className="sr-only">Username</label>
                <input type="username" id="username" className="form-control" name="username" placeholder="username" onChange= {e => this.props.changeInput(e)} required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" onChange= {e => this.props.changeInput(e)} required/>
                {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div> */}
                <h6>Didn't have an account ? | Register <Link to="/register"><span className="bluee">here</span></Link></h6><br/>
                <button className="btn btn-lg btn-primary btn-block" onClick={()=> this.doLogin()} type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
            </form>
        </body>
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
    "is_login, full_name, email", actions
)(withRouter(SignIn))
