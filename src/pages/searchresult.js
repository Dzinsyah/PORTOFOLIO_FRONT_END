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

// const url= this.props.corsHandle + this.props.ipAddress + "public/product?rp=1000";

class SearchResult extends Component {
    constructor (props){
        super(props);
        this.state  = {
            daftarVenue:[],
            weather:[],
            search:"",
            allProduct:[],
            searchProduct:[]
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
            self.setState({searchProduct: response.data.product});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
        };
        handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.props.changeInput(e);
        };
        handleInputChange = e => {
            console.log("event", e.target.value);
            let value = e.target.value;
            this.setState(
                {
                    search:value
                },
                () => {
                    this.searchProduct(value);
                }
            );
        };
        searchProduct = async keyword => {
            console.log("seachVenue", keyword);
            const self = this;
            const searchres = {
                method: "get",
                url: this.props.corsHandle + this.props.ipAddress + "public/product?rp=1000" + "&search=" +  keyword,
                headers: {
                    "X-Requested-With": "http://13.58.84.95"
                    //   Authorization: "Bearer " + this.props.Bearer
                }
              };
            if (keyword.length >2) {
                try {
                    const response = await axios(searchres);
                    console.log(response);
                    self.setState ({searchProduct: response.data.product})
                } catch (error){
                    console.error(error);
                }
            }
        };

    render() {
        // if (this.props.is_login === false){
        //     return <Redirect to ={{ pathname: "/signin"}} />;
        // }else{
            return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                        <Header
                        doSearch = {this.handleInputChange}
                        keyword = {this.state.search}/>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-Start">
                            <h2 className="margin20px">Search Result</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                        {this.state.searchProduct.map((item, key) => {
                            return <Product key={key} name_product ={item.name} seller = {item.seller} price = {item.price} status={item.status} location={item.location} id={item.product_id} urlimage = {item.url_image}/>; }
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
    (withRouter(SearchResult))
