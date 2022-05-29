import React from 'react';
import './productDisplay.css';

const ProductDisplay = (props) => {
    
    // console.log(props.productData);
    const renderProduct = props.productData.map( (item) => {
        return(
            <div className='col' key={item.id}>
                <div className='card' style={{height:'350px', width:'100%'}}>
                    <img src={item.image}/> 
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <p className='card-text'>{item.description}</p>
                        <p className='card-text'><b>Rs. {item.cost}</b></p>
                        <p className='card-text'>Use - {item.uses}</p>
                    </div>
                </div>
            </div>
        )
    });

    return(

            <div className='row row-cols-md-4 g-4'>
                {renderProduct}
            </div>
    );
}

export default ProductDisplay;