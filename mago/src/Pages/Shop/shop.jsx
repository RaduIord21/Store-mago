import React, { useState, useEffect } from 'react';
import {useShopContext} from "../../Context/shop-context";

import { Product } from './product';
import './shop.css';
import axios from 'axios';

export const Shop = () => {
    const { products, fetchData } = useShopContext();
    // const [items, setItems] = useState([]);

    useEffect(() => {
          fetchData();
    }, []); 

    return (
        <div className='Shop'>
            <div className='ShopTitle'>
                <h1>Mago</h1>
            </div>   
            <div className='Products'>
                {products.map( (product) => (
                <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
}

