import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
