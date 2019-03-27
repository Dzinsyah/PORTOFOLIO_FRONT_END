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
import ProductEdit from '../components/myproductEdit';

class MyProduct extends Component {
    // constructor (props){
    //     super(props);
    //     this.state  = {
    //         search:""
    //     }
    // }

    componentDidMount = () => {
        this.props.getMyProduct();
        // const self = this;
        // const token = this.props.token;
        // const my_product = {
        //     method: "get",
        //     url: "http://localhost:8010/proxy/user/product?rp=1000",
        //     headers: {
        //         'Authorization':'Bearer ' + token
        //     }
        // };
        //  axios(my_product)
        // .then(function(response){
        //     self.setState({items: response.data.product});
        //     console.log(response.data);
        //     alert("sukses");
        // })
        // .catch(function(error){
        //     console.log(error);
        // });
        };
        componentDidUpdate = () => {
            this.props.getMyProduct();
            };

    render() {
        if (this.props.is_login === false){
            return <Redirect to ={{ pathname: "/signin"}} />;
        }else{
            return (
            <div>
            <div className="container-fluid">
                <div className="row">
                <Header />
                </div>
            </div>
                <div class="container-fluid">
                <div class="row justify-content-Start">
                    <h2 class="margin20px">{this.props.myProductList.seller}</h2><br/>
                    <h2 class="margin20px">My product</h2><br/>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                {this.props.myProductList.map((item, key) => {
                    return <ProductEdit key={key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} urlimage = {item.url_image} id={item.product_id} />; }
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
        }}
        
    };
export default connect(
    "is_login, token, myProductList", actions)
    (withRouter(MyProduct))
