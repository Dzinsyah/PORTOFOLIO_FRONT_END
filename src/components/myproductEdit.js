import React, { Component } from 'react';
import '../style/1.css';
import {connect} from "unistore/react";
import {actions} from './store';
import {withRouter} from "react-router-dom";
import{ Link } from "react-router-dom";
import {Redirect} from "react-router-dom";



class ProductEdit extends Component{
    handleClick=(e)=>{
        e.preventDefault();
        console.log("event",e.target.value)
        this.props.handleClick(e.target.value);
        this.props.history.push("/productdetail");
    }
    handleDelete=(e)=>{
        e.preventDefault();
        console.log("event",e.target.value)
        this.props.handleClick(e.target.value);
        this.props.deleteProduct();
        this.props.history.push("/myproduct");
    }
    handleEdit=(e)=>{
        e.preventDefault();
        console.log("event",e.target.value)
        this.props.handleClick(e.target.value);
        this.props.history.push("/editproduct");
    }    
    render() {
    return (

        <div class="col-md-2 col-sm-4 col-12 borderproduct textcenter margin20">
            <a href="#"><img src={this.props.urlimage} class="imgproduct" alt=""/></a>
            <table>
                <tr class="">
                    <td><span>Name</span></td>
                    <td><span>:</span></td>
                    <td><span>{this.props.name_product}</span></td>
                </tr>
                <tr class="">
                    <td><span>Status</span></td>
                    <td><span>:</span></td>
                    <td><span>{this.props.status}</span></td>
                </tr>
                <tr class="">
                    <td><span>Price</span></td>
                    <td><span>:</span></td>
                    <td><span>{this.props.price}</span></td>
                </tr>
                <tr class="">
                    <td><span>seller</span></td>
                    <td><span>:</span></td>
                    <td><span>{this.props.seller}</span></td>
                </tr>
            </table>
            <button className="btn-primary btndetail" onClick={e => {this.handleClick(e);}} value={this.props.id}>Lihat detail item</button>
            <button className="btn-primary btndetailgreen" onClick={e => {this.handleEdit(e);}} value={this.props.id}>Edit</button>
            <button className="btn-primary btndetailred" onClick={e => {this.handleDelete(e);}} value={this.props.id}>Delete</button>
        </div>

);
}
}
export default connect("productid", actions)(withRouter(ProductEdit));
