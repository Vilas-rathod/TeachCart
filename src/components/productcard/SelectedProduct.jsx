import React from "react";
import "./SelectedProduct.css";
import { useNavigate } from "react-router-dom";

const SelectedProduct = ({ product, onBack, onAddToCart }) => {
  const navigate=useNavigate();
  if (!product) return <p className="no-product">No Product Selected!</p>;

  const handleBuyNow=()=>{
     navigate("/checkout",{state:{product}})
  }

  return (
    <div className="selected-product-container">
      <img
        className="selected-product-image"
        src={product.image}
        alt={product.name}
      />
      <div className="selected-product-details">
        <h1>{product.name}</h1>
        <p className="selected-product-description">{product.description}</p>
        <h3 className="selected-product-price">Price: ${product.price}</h3>

        <div className="selected-product-buttons">
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
          <button className="buy-now-btn" onClick={() => handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
