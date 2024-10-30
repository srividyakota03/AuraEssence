// src/pages/CollectionsPage.js
import React from 'react';
import './CollectionsPage.css';

function CollectionsPage() {
  return (
    <div className="collections-page">
      <h2>Our Exclusive Collections</h2>
      <p>Explore our range of unique and luxurious perfume collections curated just for you.</p>

      <div className="collection-items">
        <div className="collection-item">
          <h3>Classic Collection</h3>
          <p>Timeless fragrances that embody sophistication and elegance.</p>
        </div>

        <div className="collection-item">
          <h3>Modern Collection</h3>
          <p>Contemporary scents with a blend of bold and subtle notes.</p>
        </div>

        <div className="collection-item">
          <h3>Exotic Collection</h3>
          <p>Rare and unique perfumes inspired by exotic places around the world.</p>
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
