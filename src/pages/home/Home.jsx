import React, { useState } from 'react';

import './Home.css'; // Assuming you have a separate CSS file for styling
import ProductListing from '../productlisting/ProductListing';
import SelectedProduct from '../../components/productcard/SelectedProduct';

const Home = () => {
//  const[selectedProduct, setSelectProduct] =useState(null);

//  const[cart, setCart]=useState([]);
  return (
    <>
      <ProductListing/>
      {/* <SelectedProduct/> */}
      {/* <SelectedProduct product={ selectedProduct}
      onBack={()=> setSelectProduct(null)}
      onAddToCart={addToCart}/> */}
    
    </>
  );
};

export default Home;
