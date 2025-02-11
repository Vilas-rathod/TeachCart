// ProductCard.js
import React from 'react';
import './ProductCard.css';
import { useState } from 'react';



const ProductCard = ({ product,onSelect, onAddToCart }) => {

    return (
        <div className="product-card" onClick={()=>onSelect(product)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
