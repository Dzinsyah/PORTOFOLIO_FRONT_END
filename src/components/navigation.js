import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/main.css';
import{ Link } from "react-router-dom";

const Navigation = props => {
   return (

<div className="col-md-4 col-12">
    <Link to="/cartlist"><img src={require('../images/cart.png')} class="cart " alt="" /></Link>
    <Link to="/signin" className="btn btn-outline-primary margin5 bwhite"><span className="cwhite">Login</span></Link>
    <Link to = "/" onClick={()=> props.postSignout()} className="btn btn-outline-primary margin5 bwhite"><span className="cwhite">Sign Out</span></Link>
</div>
    );
  }


export default Navigation;

