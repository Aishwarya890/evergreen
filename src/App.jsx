import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-[80px]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
