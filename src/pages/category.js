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




class Category extends Component {
    
    handleClick(e){
        let category = e.target.name;
        const self = this;
        this.props.searchCategory(category);
        }

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
                            <h2 class="margin20px">category</h2>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                        {this.props.categorylist.map((item, key) => {
                            return <Product key={key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} urlimage = {item.url_image}/>; }
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
    "is_login, categorylist, corsHandle, ipAddress", actions)
    (withRouter(Category))
