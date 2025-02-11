// CartPage.js
import React, { useEffect, useState } from 'react';
import './CartPage.css'; // Ensure you have a CSS file for styling
//import Cart from './Cart'; // Import the Cart component
import { getData } from '../../api/Client'; // Import your API client

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getData('/cart'); // Fetch cart items from API
        setCartItems(data);
      } catch (err) {
        setError('Failed to fetch cart items');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {loading ? (
        <p>Loading cart items...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Cart hidden</p>
       // <Cart cart={cartItems} />
      )}
    </div>
  );
};

export default CartPage;
