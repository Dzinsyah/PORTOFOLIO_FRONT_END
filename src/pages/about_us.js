import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/portofolio.css';




class AboutUs extends Component {
   
    render() {
            return (
                <div>
                <div className="container-fluid">
                    <div className="row">
                    <Header />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                    </div>
                    <div className="row justify-content-center">
                        <h1 className="serif ">About us</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-12 text-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3040934825945!2d112.60830204955872!3d-7.967492081590294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882865ded0697%3A0xa77fa961a7c4e4b7!2sSepulsa+Lodge+Malang!5e0!3m2!1sen!2sid!4v1550191480724"
                            width="600" height="300" frameborder="0"  allowfullscreen></iframe><br/><br/>
                        <p> Gadget.inc adalah situs untuk jual beli gadget online yang mudah, aman, dan terpercaya </p><br/>
                        <span>Silakan menghubungi kami di :</span><br/>
                        <span>PT. Alterra </span><br/>
                        <span>Jl. Raya Tidar No.23, Karangbesuki,</span><br/>
                        <span>Sukun, Kota Malang, Jawa Timur 65146</span><br/><br/>
                        <span>Telephone</span><br/>
                        <span>085666777888</span><br/><br/>
                        <span>Email</span><br/>
                        <span>Gadget_inc@alterra.co.id</span><br/><br/>
                        <span>Kirim complain atau feedback pada form dibawah ini</span><br/><br/>
                        <div className="container-fluid ">
                            <div className="row justify-content-center">
                                <a className="btn btn-primary text-center " id="marginbottom"  href="#">Send Feedback</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
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
    "is_login", actions)
    (withRouter(AboutUs))
