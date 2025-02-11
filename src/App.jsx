import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import CartPage from './pages/cart/CartPage';
import ContactUs from './pages/ContactUs';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductListing from './pages/productlisting/ProductListing';
const App = () => {
  return (
    <>
       
     
       <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductListing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </Router>
     
    
    </>
  );
};

export default App;