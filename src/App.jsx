import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import GardenComposting from './components/GardenComposting';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsAndCondition from './components/TermsAndCondition';
import CustomerReviews from './components/CustomerReviews';
import AboutUs from './components/AboutUs';
import CartSidebar from './components/CartSidebar';
import NewInSection from './components/NewInSection';
const App = () => {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <CartSidebar />
      {/* Spacer for fixed navbar */}
      <div className="h-[80px]"></div>
      
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/garden-composting" element={<GardenComposting />} />
        
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie-privacy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/customer-reviews" element={<CustomerReviews/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/view-cart" element={<CartSidebar/>} />
        <Route path="/new-in" element={<NewInSection/>} />
        
        {/* Add more routes as needed */}
        
        


        
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;
