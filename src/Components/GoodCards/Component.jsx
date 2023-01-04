import React from 'react';
import { DATA } from './data';
import './cards.css';

const Cards = () => { 
    return ( 
        <div className='container' style={{textAlign: 'center'}}> 
            {DATA.map(data => <Card info={data} key={data.name} />)} 
        </div> 
        ); 
    };
    
const Card = ({ info }) => {

    const { img, name, price } = info; 
    
    return ( 
        <div className='product'> 
            <img className='imageproduct' src={img} alt='Product' /> 
            <p>{name}</p> 
            <p>{price} грн</p> 
        </div> 
        ); 
    }; 
    export default Cards;