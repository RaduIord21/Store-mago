// Product Component
import React, { useContext, useState } from 'react';
import { useShopContext } from '../../Context/shop-context';

export const Product = (props) => {
    const { id, name, price, image_url, description } = props.data;
    const { AddToCart, cartItems } = useShopContext();
    const cartItemAmount = cartItems[id];

    // State to track hover state
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`product ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image_url} alt={name} className="productImage" />
            <div className='description'>
                <p className='productName'><b>{name}</b></p>
                {isHovered && <p className='productDescription'>{description}</p>}
                <p className='price'>RON {price}</p>
            </div>
            <button className='AddToCart' onClick={() => AddToCart(id)}>
                Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
};
