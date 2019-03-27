import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/1.css';
import CartItem from '../components/cartitem';
import{ Link } from "react-router-dom";



class Cart extends Component {
    // constructor (props){
    //     super(props);
    //     this.state  = {
    //         search:"",
    //         cartlist:[],
    //         datacart:[]
    //     }
    // }
    // localhost:8002/user/cart?rp=100
    componentDidMount = () => {
        this.props.getCart();
        };
    componentDidUpdate = () => {
            this.props.getCart();
            // const self = this;
            // const token = this.props.token;
            // const mycart = {
            //     method: "get",
            //     // url: "http://localhost:8010/proxy/user/product",
            //     url: "http://localhost:8010/proxy/user/cart?rp=1000",
            //     headers: {
            //         'Authorization':'Bearer ' + token
            //     }
            // };
            //  axios(mycart)
            // .then(function(response){
            //     self.setState({cartlist: response.data.cartList});
            //     self.setState({datacart: response.data});
            //     console.log(response.data);
            //     alert("sukses");
            // })
            // .catch(function(error){
            //     console.log(error);
            // });
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
            <div className="container-fluid">
                <div className="row justify-content-Start">
                    <h2 className="margin20px">"Cart"</h2>
                </div>
            </div>
            {this.props.cartlist.map((item, key) => {
                            return <CartItem key={key} name ={item.product_name} price = {item.price} qty = {item.qty} cart_id={item.cart_id} urlimage={item.urlimage}/>; }
                                    )}
            <div className="container-fluid justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12 borderproduct marginauto textcenter margin20">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-12">
                                <table className="marginauto">
                                    <tr className="">
                                        <td><span>Total quantity</span></td>
                                        <td><span>:</span></td>
                                        <td><span>{this.props.datacart.totalQty}</span></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="col-md-6 col-12">
                                <table className="marginauto">
                                    <tr className="">
                                        <td><span>Total price</span></td>
                                        <td><span>:</span></td>
                                        <td><span>{this.props.datacart.totalPrice}</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <form className="form-signin" action="" >
                    <Link to="/checkout" className="btn btn-lg btn-primary btn-block" type="submit">Checkout</Link>
                </form>
            </div>
            <div className="container-fluid">
                  <div className="row">
                  <Footer />
                  </div>
            </div>
            </div>
                );
        }
        
    }};
export default connect(
    "is_login, token, cartlist, datacart, corsHandle, ipAddress", actions)
    (withRouter(Cart))
