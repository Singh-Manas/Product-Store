import React, { Component } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import Footer from './Footer';
import JSONData from './db.json';

class Home extends Component{

    constructor(){
        super();
        this.setState = {
            productData: JSONData
        }
    }

    render(){
        return(
            <>
                <Header/>
                <ProductDisplay productData = {this.state.productData}/>
                <Footer/>
            </>
        );
    }
}

export default Home;