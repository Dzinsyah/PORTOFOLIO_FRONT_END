import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from '../components/store';
import {withRouter} from "react-router-dom";
import '../style/1.css';
import Product from '../components/product';



class AddProduct extends Component {
    handleClick(e){
        e.preventDefault();
        const {url_image, status, vendor, name, price, processor, ram, memory, camera, other_description, stock, location} = e.target;
        var data ={};
        
        data.url_image = url_image.value;
        data.status = status.value;
        data.vendor = vendor.value;
        data.name = name.value;
        data.price = price.value;
        data.processor = processor.value;
        data.ram = ram.value;
        data.memory = memory.value;
        data.camera = camera.value;
        data.other_description = other_description.value;
        data.stock = stock.value;
        data.location = location.value;

        const token = this.props.token;
        const self = this;
        console.log(" add product data", data);
        console.log(" add product data", this);
        let reqAdd = {
            method:'post',
            url:this.props.corsHandle + this.props.ipAddress +'user/product',
            // url:'http://localhost:8002/user/product',
            headers: {
                'Authorization':'Bearer ' + token,
                "X-Requested-With": "http://13.58.84.95"
            },
            params : data
        };
        axios(reqAdd)
        .then(function(response){
            console.log(response.data);
            alert("tambah produk sukses")
            self.props.history.push("/myproduct");
        });

    };    
    render() {
        if (this.props.is_login === false){
            return <Redirect to ={{ pathname: "/signin"}} />;
        }else{
            return (
                <div>
                <div className="container-fluid">
                    <div className="row">
                    <Header/>
                    </div>
                </div>

                <body className="text-center">
                    <form className="form-register" onSubmit={e => this.handleClick(e)}>
                        <img className="mb-4" src={require('../images/logo2.png')} alt="" className="logo1"/>
                        <h1 className="h3 mb-3 font-weight-normal">Add product</h1>
                        <label for="inputUrl_image" className="sr-only">Url image</label>
                        <input type="username" id="inputUrl_image" className="form-control" name="url_image" placeholder="Url image" required autofocus/>
                        <label for="inputStatus" className="sr-only">Status</label>
                        <input type="username" id="inputUstatus" className="form-control" name="status" placeholder="Status" required autofocus/>
                        <label for="inputvendor" className="sr-only">vendor</label>
                        <input type="username" id="inputVendor" className="form-control" name="vendor" placeholder="Vendor" required autofocus/>
                        <label for="inputname" className="sr-only">name</label>
                        <input type="username" id="inputname" className="form-control" name="name" placeholder="Name" required autofocus/>
                        <label for="inputPrice" className="sr-only">Price</label>
                        <input type="Username" id="inputPrice" className="form-control" name="price" placeholder="Price" required autofocus/>
                        <label for="inputProcessor" className="sr-only">Processor</label>
                        <input type="username" id="inputProcessor" className="form-control" name="processor" placeholder="Processor" required autofocus/>
                        <label for="inputram" className="sr-only">ram</label>
                        <input type="username" id="inputram" className="form-control" name="ram" placeholder="ram" required autofocus/>
                        <label for="inputMemory" className="sr-only">Memory</label>
                        <input type="username" id="inputMemory" className="form-control" name="memory" placeholder="Memory" required autofocus/>
                        <label for="inputCamera" className="sr-only">Camera</label>
                        <input type="username" id="inputCamera" className="form-control" name="camera" placeholder="Camera" required autofocus/>
                        <label for="inputOther_description" className="sr-only">Other_description</label>
                        <input type="username" id="inputOther_description" className="form-control" name="other_description" placeholder="Other_description" required autofocus/>
                        <label for="inputstock" className="sr-only">stock</label>
                        <input type="username" id="inputstock" className="form-control" name="stock" placeholder="stock" required autofocus/>
                        <label for="inputLocation" className="sr-only">Location</label>
                        <input type="Telephone" id="inputLocation" className="form-control" name="location" placeholder="Location" required autofocus/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Add product</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
                    </form>
                </body>
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
    "is_login, token, corsHandle, ipAddress", actions)
    (withRouter(AddProduct))
