import React, {useEffect} from 'react';

import { useShopContext } from '../../Context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';
import { Checkout } from '../Checkout/checkout';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
    const { products, fetchData } = useShopContext();
    const {cartItems, getTotalCartAmount} = useShopContext();
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    useEffect(() => {
          fetchData();
    }, []); 

    const handleButtonClick = () => {
       navigate('/checkout');
    }
    return (
        <div className='cart'>
             <div className='cartTitle'>
                <h1>Your Cart Items</h1>
             </div>
             <div className='cartItems'>
                {products.map((product) => {
                    if (typeof cartItems[product.id] !== 'undefined' ){
                        return <CartItem key={product.id} data={product} />;
                    }
                })}
             </div>
             {totalAmount > 0 ? (
             <div className='checkout'>
                <p>Subtotal : RON {totalAmount}</p>
                <button onClick={() => {navigate('/')}} >Continue Shopping</button>
                <button onClick={handleButtonClick}>Checkout</button>
             </div>) : (
                <h2>Cart is empty</h2>
             )}
        </div>
    );
}

   