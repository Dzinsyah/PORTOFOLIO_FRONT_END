import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/portofolio.css';
import Carousel from '../components/carrousel';
import Product from '../components/product';


class HomePage extends Component {
    constructor (props){
        super(props);
        this.state  = {
            daftarVenue:[],
            weather:[],
            search:"",
            listproduct:[],
            popularProduct:[]
        }
    }
    componentDidMount = () => {
        const self = this;
        const product = {
            method: "get",
            url: this.props.corsHandle + this.props.ipAddress +"public/product?rp=8",
            headers: {
                "X-Requested-With": "http://13.58.84.95"
                //   Authorization: "Bearer " + this.props.Bearer
            }
          };
          const popular = {
            method: "get",
            url: this.props.corsHandle + this.props.ipAddress + "public/product?rp=4",
            headers: {
                "X-Requested-With": "http://13.58.84.95"
            //   Authorization: "Bearer " + this.props.Bearer
            }
          };
         axios(product)
        .then(function(response){
            self.setState({listproduct: response.data.product});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
            alert("error")
        });
        axios(popular)
        .then(function(response){
            self.setState({popularProduct: response.data.product});
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
                    <Carousel />
                    <div className="container-fluid">
                        <div className="row justify-content-Start">
                            <h2 className="margin20px">Popular Product</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        {this.state.popularProduct.map((item, key) => {
                            return <Product key={item.key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} id={item.product_id} urlimage = {item.url_image}/>; }
                                    )}
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-Start">
                            <h2 className="margin20px">List Product</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        {this.state.listproduct.map((item, key) => {
                            return <Product key={item.key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} id={item.product_id} urlimage = {item.url_image}/>; }
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
    "is_login, token, corsHandle, ipAddress", actions)
    (withRouter(HomePage))

