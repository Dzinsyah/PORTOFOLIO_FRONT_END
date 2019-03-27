import React, { Component } from 'react';
import '../style/App.css';
import '../style/10.css';
import{ Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="row backblack ">
            <div className="col-2 textcenter">
                <img src={require('../images/logo2.png')} className="logo1" alt=""/>>
            </div>
            <div className="col-md-2 col-12 textcenter paddingtop20">
                <table className="text-center">
                    <tr className="">
                        <td><a href="#"><span>Gadget.inc</span></a></td>
                    </tr>
                    <tr className="">
                        <td><Link to="/aboutus"><span className="cwhite">About us</span></Link></td>
                    </tr>
                    <tr className="">
                        <td><Link to="/contactus"><span className="cwhite">Contact us</span></Link></td>
                    </tr>
                </table>
            </div>
            <div className="col-md-2 col-12 textcenter paddingtop20">
                <table>
                    <tr className="">
                        <td><a href="#"><span>Buy</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="#"><span className="cwhite">How to buy</span></a></td>
                    </tr>
                    <tr className="">
                        <td><Link to="/transaction"><span className="cwhite">Transaction</span></Link></td>
                    </tr>
                </table>
            </div>
            <div className="col-md-2 col-12 textcenter paddingtop20">
                <table>
                    <tr className="">
                        <td><a href="#"><span>Sell</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="#"><span className="cwhite">How to sell</span></a></td>
                    </tr>
                </table>
            </div>
            <div className="col-md-2 col-12 textcenter paddingtop20">
                <table>
                    <tr className="">
                        <td><a href="#"><span>Follow us</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.instagram.com"><span className="cwhite">Instagram</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.twitter.com"><span className="cwhite">Twitter</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.facebook.com"><span className="cwhite">Facebook</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.linkedin.com"><span className="cwhite">linkedin</span></a></td>
                    </tr>
                </table>
            </div>
            <div className="col-md-2 col-12 textcenter paddingtop20">
                <table>
                    <tr className="">
                        <td><a href="#"><span>References</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.tabloidpulsa.co.id"><span className="cwhite">Tabloid pulsa</span></a></td>
                    </tr>
                    <tr className="">
                        <td><a href="http://www.gsmarena.com"><span className="cwhite">GSM Arena</span></a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    );
  }
}

export default Footer;

