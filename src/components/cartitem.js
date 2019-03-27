import React, { Component } from 'react';
import '../style/1.css';
import {connect} from "unistore/react";
import {actions} from './store';
import {withRouter} from "react-router-dom";
import{ Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from 'axios';



class CartItem extends Component{
    handleClick=(e)=>{
        e.preventDefault();
        console.log("event",e.target.value)
        this.props.rmCartClick(e.target.value);
        this.props.deleteCart();

    }    
    render() {
    return (
        <div className="container-fluid justify-content-center">
            <div className="row justify-content-center">
                <div className="col-md-6 col-12 borderproduct marginauto textcenter margin20">
                <a href="#"><img src={this.props.urlimage} class="imgproduct" alt=""/></a>
                    <table className="marginauto">
                        <tr className="">
                            <td><span>Name</span></td>
                            <td><span>:</span></td>
                            <td><a href="#"><span>{this.props.name}</span></a></td>
                        </tr>
                        <tr className="">
                            <td><span>Price</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.price}</span></td>
                        </tr>
                        <tr className="">
                            <td><span>QTY</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.qty}</span></td>
                        </tr>
                    </table>
                    <button className="btn btn-primary " onClick={e => {this.handleClick(e);}} value={this.props.cart_id} style={{backgroundColor:"Red"}} href="">Remove</button>
                </div>
            </div>
        </div>
);
}
}
export default connect("productid, id, token, cartid", actions)(withRouter(CartItem));