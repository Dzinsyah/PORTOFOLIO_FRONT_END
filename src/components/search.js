import React, { Component } from 'react';
import '../style/App.css';
import '../style/10.css';
import{ Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
                    <div className="col-8">
                        <form className="find" action="">
                            <input type="text" placeholder="Search.." onChange={this.props.doSearch} value={this.props.keyword} name="search"/>
                            <button type="submit"><i className="fa fa-search">Find</i></button>
                        </form>
                    </div>
    );
  }
}

export default Search;

