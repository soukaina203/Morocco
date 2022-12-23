import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './RoutingPages/Home/App';
import About from './RoutingPages/About/About';
import Header from './RoutingPages/header/Header'
import Contact from './RoutingPages/Contact/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  </React.StrictMode>
);



