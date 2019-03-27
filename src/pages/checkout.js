import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/portofolio.css';





class Transaction extends Component {
   
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
                <body className="text-center">
                    <form className="form-register">
                        <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                        <h1 className="h3 mb-3 font-weight-normal">Transaction</h1>

                        <label for="inputname" className="sr-only">name</label>
                        <input type="username" id="inputname" className="form-control" placeholder="Full Name" required autofocus/>

                        <label for="inputEmail" className="sr-only">Email</label>
                        <input type="Username" id="email" className="form-control" placeholder="Email" required autofocus/>

                        <label for="inputAddress" className="sr-only">Address</label>
                        <input type="username" id="inputAddress" className="form-control" placeholder="Address" required autofocus/>
                                                
                        <label for="inputPrice" className="sr-only">Price</label>
                        <input type="username" id="inputPrice" className="form-control" placeholder="Price" required autofocus/><br/>
                        
                        <h5 class="mb-3">Payment Method</h5>
                        <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked
                                    required/>
                                <label class="custom-control-label" for="credit">Alfamart</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" for="debit">Indomaret</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" for="paypal">Mandiri</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                <label class="custom-control-label" for="paypal">BCA</label>
                            </div>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Continue to checkout</button>
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
    "is_login", actions)
    (withRouter(Transaction))
