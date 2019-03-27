import React, { Component } from 'react';
import '../style/1.css';
import{ Link } from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from './store';
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from 'axios';


class ProductDetail extends Component{
    constructor (props){
        super(props);
        this.state  = {
            search:"",
            product_id:"",
            qty:0
        }
    }
    handleClick=(e)=>{
        e.preventDefault();
        console.log("event",e.target.value)
        this.props.handleClick(e.target.value);
        this.props.postCart();
    }    
    render() {
    return (
<div>
    <div className="container-fluid">
        <div className="row justify-content-Start">
            <h2 className="margin20px"></h2>
        </div>
    </div>
    <div className="container-fluid justify-content-center">
        <div className="row justify-content-center">
            <div className="col-md-6 col-12 borderproduct marginauto detailprod textcenter margin20">
                <a href="#"><img src={this.props.urlimage} className="imgproduct" alt=""/></a>
                <table className="marginauto">
                    <tr>
                        <td><span>Name</span></td>
                        <td><span>:</span></td>
                        <td><a href="#"><span>{this.props.name}</span></a></td>
                    </tr>
                    <tr>
                        <td><span>Vendor</span></td>
                        <td><span>:</span></td>
                        <td><span>{this.props.vendor}</span></td>
                    </tr>
                    <tr>
                        <td><span>Status</span></td>
                        <td><span>:</span></td>
                        <td><span>{this.props.status}</span></td>
                    </tr>
                    <tr>
                        <td><span>Price</span></td>
                        <td><span>:</span></td>
                        <td><span>{this.props.price}</span></td>
                    </tr>
                    <tr>
                        <td><span>seller</span></td>
                        <td><span>:</span></td>
                        <td><span>{this.props.seller}</span></td>
                    </tr>
                    <tr>
                            <td><span>Processor</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.processor}</span></td>
                        </tr>
                        <tr>
                            <td><span>RAM</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.ram}</span></td>
                        </tr>
                        <tr>
                            <td><span>Memory</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.memory}</span></td>
                        </tr>
                        <tr>
                            <td><span>Camera</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.camera}</span></td>
                        </tr>
                        <tr>
                            <td><span>Other Description</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.other_description}</span></td>
                        </tr>
                        <tr>
                            <td><span>Stock</span></td>
                            <td><span>:</span></td>
                            <td><span>{this.props.stock}</span></td>
                        </tr>
                </table>
            </div>
        </div>
        <span>Input Qty </span><br/><br/>
        <input type="number" onChange={e => this.props.changeInput(e)} name="qtyorder"/><br/><br/>
        <button className="btn btn-primary pb20" onClick={e => {this.handleClick(e);}} value={this.props.id} style={{backgroundColor:"blue", marginBottom:"30px"}} >Add to Cart</button>
    </div>
</div>
);
}}

export default connect("productid, token, qtyorder", actions)(withRouter(ProductDetail));
