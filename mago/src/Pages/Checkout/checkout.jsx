import React, { useState, useContext } from 'react';
import axios from 'axios';
import './checkout.css';
import {useShopContext} from "../../Context/shop-context";
import { useNavigate } from 'react-router-dom';


export const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const { getCart, getTotalCartAmount} = useShopContext();
    const totalAmount = getTotalCartAmount();

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    

    const handlePlaceOrder = async (event) => {
        event.preventDefault();
        //console.log(Context.getCart());

    
        // Collect form data
        const formData = {
            deliveryMethod: document.querySelector('input[name="deliveryMethod"]:checked').value,
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            cardNumber: paymentMethod === 'card' && document.getElementById('cardNumber').value,
            expiryDate: paymentMethod === 'card' && document.getElementById('expiryDate').value,
            cvv: paymentMethod === 'card' && document.getElementById('cvv').value,
            items: getCart()
        };
        console.log(formData);

        
        // Make a POST request with the form data using Axios
        try {
            const response = await axios.post('http://localhost:8000/order.php', formData);

            if (response.status === 200) {
                alert("Your items are worth : " + totalAmount);
                // You can perform additional actions after a successful order placement
            } else {
                console.error('Failed to place order');
                // Handle the error accordingly
            }
        } catch (error) {
            console.error('Error during order placement:', error);
            // Handle the error accordingly
        }
        console.log()
    };

    return (
        <div className='Checkout'>
            <h2>Checkout Form</h2>
            <form id="checkoutForm" onSubmit={handlePlaceOrder}>
                <div className="radio">
                    Delivery Method:
                    <div className='deliveryOptions'>
                        <div className='radio-button'>
                            <label htmlFor="homeDelivery">Home Delivery</label>
                            <input type="radio" id="homeDelivery" name="deliveryMethod" value="homeDelivery" defaultChecked />
                        </div>
                        <div className='radio-button'>
                            <label htmlFor="personalPickup">Personal Pickup</label>
                            <input type="radio" id="personalPickup" name="deliveryMethod" value="personalPickup" />
                        </div>
                    </div>
                </div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <div className="radio">
                    Payment Method:
                    <div className='deliveryOptions'>
                        <div className='radio-button'>
                            <label htmlFor="creditCard">Credit Card</label>
                            <input
                                type="radio"
                                id="creditCard"
                                name="creditCard"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={handlePaymentMethodChange}
                            />
                        </div>
                        <div className='radio-button'>
                            <label htmlFor="cash">Cash on delivery</label>
                            <input
                                type="radio"
                                id="cash"
                                name="paymentMethod"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={handlePaymentMethodChange}
                            />
                        </div>
                    </div>
                    {paymentMethod === 'card' && (
                        <div className="credit-card-details">
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input type="text" id="cardNumber" name="cardNumber" required />

                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />

                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" required />
                        </div>
                    )}
                </div>
                <button className="submitButton" type="submit" >Place Order</button>
            </form>
        </div>
    );
};
