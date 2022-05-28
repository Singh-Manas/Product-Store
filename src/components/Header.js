import React from 'react';
import './header.css';

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            title: "Product Store",
            userText: "User Text Here"
        };
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            userText: event.target.value
        });
    }

    render(){
        return(
            <>
                <header>
                    <div className='title'>
                        <center>
                            <div>{this.state.title}</div>
                            <input onChange={this.handleChange}/>
                            <div style={{fontSize: "20px"}}>{this.state.userText}</div>
                        </center>
                    </div>
                </header>
                <hr/>
            </>
        )
    }
}

export default Header;