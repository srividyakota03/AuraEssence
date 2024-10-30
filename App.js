// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
