import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/portofolio.css';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import Header from '../components/header';
import Footer from '../components/footer';


class Register extends Component {
    handleClick(e){
        e.preventDefault();
        const {username, email, password, telephone, address} = e.target;
        var data ={};
        
        data.username = username.value;
        data.email = email.value;
        data.password = password.value;
        data.telephone = telephone.value;
        data.address = address.value;

        const token = this.props.token;
        const self = this;
        console.log(" add product data", data);
        let reqAdd = {
            method:'post',
            url:this.props.corsHandle + this.props.ipAddress +'user/register',
            // url:'http://localhost:8002/user/product',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':"*",
                "X-Requested-With": "http://13.58.84.95"
            },
            params : data
        };
        axios(reqAdd)
        .then(function(response){
            console.log(response.data);
            self.props.history.push("/signin");
            alert("Registrasi sukses")
        })
        .catch(function(error){
            console.log(error);
            alert("error");
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
            <form className="form-register" onSubmit={e => this.handleClick(e)}>
                <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <label for="inputUsername" className="sr-only">Username</label>
                <input type="username" id="inputUsername" className="form-control" name="username" placeholder="Username" required autofocus/>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email address" required autofocus/>
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required/>
                <label for="inputAddress" className="sr-only">Address</label>
                <input type="address" id="inputAddress" className="form-control" name="address" placeholder="Address" required autofocus/>
                <label for="inputTelephone" className="sr-only">Telephone</label>
                <input type="telephone" id="inputTelephone" className="form-control" name="telephone" placeholder="Telephone" required autofocus/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
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
    "is_login, full_name, email, corsHandle, ipAddress", actions
)(withRouter(Register))
