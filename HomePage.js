// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import blush1 from './ProductPageResources/pics/blush1.jpg';
import engage1 from './ProductPageResources/pics/engage1.jpg';
import lancy1 from './ProductPageResources/pics/lancy1.png';
import ck from './ProductPageResources/pics/ck.png';
import na1 from './ProductPageResources/pics/nautica1.png';
const products = [
  {
    id: 1,
    name: "Blush",
    description: "A delicate and feminine scent perfect for any occasion.",
    price: "5,886/-",
    imageUrl: blush1,
  },
  {
    id: 2,
    name: "Engage",
    description: "A captivating fragrance that keeps you energized.",
    price: "4,204/-",
    imageUrl: engage1,
  },
  {
    id: 3,
    name: "Lancy",
    description: "A sophisticated scent for the modern individual.",
    price: "6,727/-",
    imageUrl: lancy1,
  },
  {
    id: 4,
    name: "CK One",
    description: "A refreshing unisex fragrance for everyone.",
    price: "5,045/-",
    imageUrl: ck,
  },
  {
    id: 5,
    name: "Nautica",
    description: "An aquatic fragrance that captures the essence of the sea.",
    price: "3,363/-",
    imageUrl: na1,
  },
];

function HomePage() {
  return (
    <div className="home-page">
      <div className="banner">
        <h1>Discover Your Signature Scent</h1>
        <p>Explore our latest collections and special offers!</p>
      </div>

      <h2>Featured Products</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <Link to={`/products/${product.id}`} className="view-details">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
