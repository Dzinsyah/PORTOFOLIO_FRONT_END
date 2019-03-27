import React, { Component } from 'react';
import '../style/App.css';
import '../style/portofolio.css';
import{ Link } from "react-router-dom";
import Navigation from './navigation';

class Header extends Component {
    postSignout = () => {
        this.props.is_login=false;
        this.props.history.push("/");
    };
  render() {
    return (
        <div className="container-fluid">
        <div className="row backblack">
            <div className="col-md-3 col-12 textcenter">
                <img src={require('../images/logo2.png')} className="logo1" alt=""/>

            </div>
            <div className="col-md-9 col-12">
                <div className="row justify-content-center paddingtop30">
                <div className="col-8">
                        <form className="find" action="">
                            <input type="text" placeholder="Search.." onChange={this.props.doSearch} value={this.props.keyword} name="search"/>
                            <Link to="/searchresult" type="submit" className="btn btnsearch"><i className="fa fa-search">Find</i></Link>                            {/* <button type="submit"><i class="fa fa-search">Find</i></button> */}
                        </form>
                    </div>
                    <Navigation postSignout = {this.postSignout}/>
                </div>
                <div className="row justify-content-start backblack">
                    <nav className="navbar navbar-expand-sm bg-light backblack ">
                        <ul className="navbar-nav">
                            <li className="nav-item textcenter ">
                                <Link to="/" className="nav-link cwhite">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/allproduct" className="nav-link cwhite">List Product</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/myproduct" className="nav-link cwhite">My product</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/addproduct" className="nav-link cwhite">Add Product</Link>
                            </li>
                        </ul>
                        <li className="dropdown">
                            <button className="mainmenubtn margindown14">Category</button>
                            <div className="dropdown-child">
                                <Link to="/category">New</Link>
                                <Link to="/category">Second</Link>
                                <Link to="/category">Apple</Link>
                                <Link to="/category">Asus</Link>
                                <Link to="/category">Oppho</Link>
                                <Link to="/category">Samsung</Link>
                                <Link to="/category">Sony Xperia</Link>
                                <Link to="/category">Xiaomi</Link>
                            </div>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Header;

