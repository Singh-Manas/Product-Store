import React, { Component } from 'react';
import Header from './Header';
import ProductDisplay from './ProductDisplay';
import Footer from './Footer';
import JSONData from './db.json';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            productData: JSONData,
            filteredData: JSONData
        }
    }

    filterProduct(userInput){
        // console.log(userInput);
        // console.log(this.state.filteredData);
        let afterFilterData = this.state.productData.filter((item) => {
            return item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
        });
        this.setState({
            filteredData: afterFilterData
        });
    }

    render(){
        return(
            <>
                <Header userText={(data) => this.filterProduct(data)}/>
                <ProductDisplay productData = {this.state.filteredData}/>
                <Footer/>
            </>
        );
    }
}

export default Home;