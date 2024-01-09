import React, {useContext} from 'react';
import {useShopContext} from '../../Context/shop-context';

export const CartItem = (props) => {
    const {id, name, price, image_url} = props.data;
    const {cartItems, AddToCart, RemoveFromCart, updateCartItemCount} = useShopContext();
    
    return <div className='cartItem'>
                <img src={image_url} alt='MissingInfo'/>
                <div className='description'>
                    <p><b>{name}</b></p>
                    <p>RON {price}</p>
                    <div className='countHandler'>
                        <button onClick={() => RemoveFromCart(id)}> - </button>
                        <input className='itemCount' value={cartItems[id]}
                         onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                        <button onClick={() => AddToCart(id)}> + </button>
                    </div>
                </div>
            </div>
}

