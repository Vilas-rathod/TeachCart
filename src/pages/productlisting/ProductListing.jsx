// ProductListing.js
import React, { useEffect, useState } from "react";
import "./ProductListing.css"; // Ensure you have the styles
import ProductCard from "../../components/productcard/ProductCard"; // Adjust the path as necessary
import { getData } from "../../api/Client"; // Import your API client
import CartPage from "../cart/CartPage";
import SelectedProduct from "../../components/productcard/SelectedProduct";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // Add cart state
  const[selectedProduct, setSelectProduct] =useState(null);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData('/products'); // Fetch products from API
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // const handleAddToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find(item => item.id === product.id);
  //     if (existingProduct) {
  //       // If product already exists in the cart, update the quantity
  //       return prevCart.map(item =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 } // Increment quantity
  //           : item
  //       );
  //     } else {
  //       // If product does not exist, add it to the cart with quantity 1
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });

  //   console.log('Product added to cart:', product);
  // };

  const handleCardClick=(product)=>{
    setSelectProduct(product);
  }

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
        {
          selectedProduct ?(
         <SelectedProduct product={ selectedProduct}
              onBack={()=> setSelectProduct(null)}
              onAddToCart={addToCart}
              /> ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}  
                product={product} 
                onAddToCart={handleAddToCart}
                onClick={handleCardClick(product)} 
              />
            ))
          )}
        </div>

      </div>
      {/* Render the Cart component */}

    </div>
  );
};

export default ProductListing;
