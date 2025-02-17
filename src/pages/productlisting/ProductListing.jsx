import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import ProductCard from "../../components/productcard/ProductCard";
import { getData } from "../../api/Client";
import SelectedProduct from "../../components/productcard/SelectedProduct";

const ProductListing = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("/products");
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <h1>Welcome to Your E-Commerce Store</h1>
          <p>Discover the latest trends in fashion and accessories.</p>
          <a href="/shop" className="btn">Shop Now</a>
        </div>
      </div>
      
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {selectedProduct ? (
            <SelectedProduct
              product={selectedProduct}
              onBack={() => setSelectedProduct(null)}
              onAddToCart={onAddToCart} // ✅ Ensure this function is passed
            />
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart} // ✅ Correct function passed
                onSelect={() => handleCardClick(product)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
