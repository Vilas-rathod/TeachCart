import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <p className="no-product">No product selected for checkout!</p>;

  const handlePayment = () => {
    alert(`Payment successful for ${product.name}!`);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-details">
        <img src={product.image} alt={product.name} className="checkout-image" />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
