import React, { createContext, useContext, useState } from 'react';
// import { Products } from '../Products';
import axios from 'axios';


const ShopContext = createContext();
export const useShopContext = () => useContext(ShopContext);


const getDefaultCart = (products) => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++){
        cart[i] = 0;
    }
    console.log('products!',products)
    return cart;
}

export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
  
    const fetchData = () => {
        try {
            axios.get('http://localhost:8000/products.php').then( (res) => {
                setProducts(res.data);
            });
            //setItems(response.data);
        } catch (error) {
          console.error('Eroare la preluarea datelor:', error);
        }
      };

    const AddToCart = (ItemId) =>{
        console.log('add',ItemId );
        setCartItems((prev) => ({...prev, [ItemId] :  (prev[ItemId] || 0) + 1}));
        console.log('cartItems', cartItems);
    }

    const RemoveFromCart = (ItemId) =>{
        setCartItems((prev) => ({...prev, [ItemId] : prev[ItemId] - 1}));
    }
    
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: newAmount}));
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let ItemInfo = products.find((product) => product.id == item);
                totalAmount += cartItems[item] * ItemInfo.price;
            }
        }
        return totalAmount;
    }

    const getCart = () =>{
        let ret = [];
        for (const item in cartItems){
            if (cartItems[item] > 0){
                ret.push({id: item, count: cartItems[item]});
            }
        }
        return ret;

    }
    
    const contextValue = {cartItems, AddToCart, RemoveFromCart, updateCartItemCount, getTotalCartAmount, getCart, fetchData, products};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
       
    ;
}

