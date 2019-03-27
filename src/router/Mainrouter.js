import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import AllProduct from "../pages/allproduct";
import SignIn from "../pages/sign_in";
import Register from "../pages/register";
import AboutUs from "../pages/about_us";
import AddProduct from "../pages/addproduct";
import Category from "../pages/category";
import SearchResult from "../pages/searchresult";
import ContactUs from "../pages/contactus";
import Transaction from "../pages/checkout";
import DetailProduct from "../pages/productdetl";
import MyProduct from "../pages/myproduct";
import Cart from "../pages/cart";
import EditProduct from "../pages/editproduct";


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path = "/" component={HomePage}/>
            <Route exact path = "/allproduct" component={AllProduct}/>
            <Route exact path = "/signin" component={SignIn}/>
            <Route exact path = "/register" component={Register}/>
            <Route exact path = "/aboutus" component={AboutUs}/>
            <Route exact path = "/addproduct" component={AddProduct}/>
            <Route exact path = "/category" component={Category}/>
            <Route exact path = "/searchresult" component={SearchResult}/>
            <Route exact path = "/contactus" component={ContactUs}/>
            <Route exact path = "/transaction" component={Transaction}/>
            <Route exact path = "/productdetail" component={DetailProduct}/>
            <Route exact path = "/myproduct" component={MyProduct}/>
            <Route exact path = "/cartlist" component={Cart}/>
            <Route exact path = "/editproduct" component={EditProduct}/>
            <Route exact path = "/checkout" component={Transaction}/>

        </Switch>
    );
};

export default MainRoute;