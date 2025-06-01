import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/Header';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CartPage from './components/pages/CartPage';
import PrivacyPage from './components/pages/PrivacyPage'; 
import RulesPage from './components/pages/RulesPage';
import BookProductPage from './components/pages/BookProductPage';
import ShippingTerms from './components/pages/ShippingTerms';
import PaymentMethod from "./components/pages/PaymentMethod";
import Discounts from "./components/pages/Discounts";  
import OrderTracking from "./components/pages/OrderTracking"; 
import FaqPage from "./components/pages/FaqPage"; 
import ReturnsPage from "./components/pages/ReturnsPage";
import TermsOfUse from "./components/pages/TermsOfUse";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs"; 


function LayoutWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-200"
      dir="rtl"
    >
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BookProduct/:id" element={<BookProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/shipping-terms" element={<ShippingTerms />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/order-tracking" element={<OrderTracking />} /> 
        <Route path="/faq" element={<FaqPage />} /> 
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>
    </div>
  );
}


function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
