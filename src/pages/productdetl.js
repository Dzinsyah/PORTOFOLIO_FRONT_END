import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/venue.css';
import ProductDetail from '../components/productdetail';


class DetailProduct extends Component {
    constructor (props){
        super(props);
        this.state  = {
            search:"",
            productbyid:[]
        }
    }
    componentDidMount = () => {
        const self = this;
        const get_product = {
            method: "get",
            url: this.props.corsHandle + this.props.ipAddress + "public/product/" + this.props.productid,
            headers: {
                "X-Requested-With": "http://13.58.84.95"
                //   Authorization: "Bearer " + this.props.Bearer
            }
          };
         axios(get_product)
        .then(function(response){
            self.setState({productbyid: response.data.product});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
        };

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
                    <div class="container-fluid">
                        <div class="row justify-content-Start">
                            <h2 class="margin20px">Product Detail</h2>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                        {/* {this.state.productbyid.map((this.state.productbyid, key) => {
                            return <ProductDetail key={key} urlimage = {item.url_image} name={item.name}  vendor={item.vendor} price = {item.price} seller = {item.seller}  status={item.status} location={item.location} processor={item.processor} ram={item.ram} memory={item.memory} camera={item.camera} other_description={item.other_description} stock={item.stock}/>; }
                                    )} */}
                        <ProductDetail urlimage = {this.state.productbyid.url_image} name={this.state.productbyid.name}  vendor={this.state.productbyid.vendor} price = {this.state.productbyid.price} seller = {this.state.productbyid.seller}  status={this.state.productbyid.status} location={this.state.productbyid.location} processor={this.state.productbyid.processor} ram={this.state.productbyid.ram} memory={this.state.productbyid.memory} camera={this.state.productbyid.camera} other_description={this.state.productbyid.other_description} stock={this.state.productbyid.stock} id={this.state.productbyid.product_id}/>

                        </div>
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
    "is_login, productid, corsHandle, ipAddress", actions)
    (withRouter(DetailProduct))
