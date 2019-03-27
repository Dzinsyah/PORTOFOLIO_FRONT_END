import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/venue.css';
import Product from '../components/product';


class AllProduct extends Component {
    constructor (props){
        super(props);
        this.state  = {
            search:"",
            allProduct:[]
        }
    }
    componentDidMount = () => {
        const self = this;
        const all_product = {
            method: "get",
            url: this.props.corsHandle + this.props.ipAddress +"public/product?rp=1000",
            headers: {
                "X-Requested-With": "http://13.58.84.95"
                //   Authorization: "Bearer " + this.props.Bearer
            }
          };
         axios(all_product)
        .then(function(response){
            self.setState({allProduct: response.data.product});
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
                            <h2 class="margin20px">All Product</h2>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                        {this.state.allProduct.map((item, key) => {
                            return <Product key={key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} urlimage = {item.url_image} id={item.product_id} />; }
                                    )}
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
    "is_login, corsHandle, ipAddress", actions)
    (withRouter(AllProduct))
