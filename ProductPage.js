// src/pages/ProductPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

// Images
import blush1 from './ProductPageResources/pics/blush1.jpg';
import blush2 from './ProductPageResources/pics/blush2.jpg';
import blush3 from './ProductPageResources/pics/blush3.jpg';

import engage1 from './ProductPageResources/pics/engage1.jpg';
import engage2 from './ProductPageResources/pics/engage2.jpg';
import engage3 from './ProductPageResources/pics/engage3.jpg';

import lancy1 from './ProductPageResources/pics/lancy1.png';
import lancy2 from './ProductPageResources/pics/lancy2.jpg';
import lancy3 from './ProductPageResources/pics/lancy3.jpg';

import ck from './ProductPageResources/pics/ck.png';
import ck2 from './ProductPageResources/pics/ck2.png';
import ck3 from './ProductPageResources/pics/ck3.png';

import na1 from './ProductPageResources/pics/nautica1.png';
import na2 from './ProductPageResources/pics/nautica2.png';
import na3 from './ProductPageResources/pics/nautica3.png';

const products = [
  {
    id: 1,
    name: "Blush",
    description: "A delicate and feminine scent perfect for any occasion.",
    price: "5,886/-",
    sizes: ["50ml", "100ml"],
    images: [blush1, blush2, blush3]
  },
  {
    id: 2,
    name: "Engage",
    description: "A captivating fragrance that keeps you energized.",
    price: "4,204/-",
    sizes: ["50ml", "100ml"],
    images: [engage1, engage2, engage3]
  },
  {
    id: 3,
    name: "Lancy",
    description: "A sophisticated scent for the modern individual.",
    price: "6,727/-",
    sizes: ["50ml", "100ml"],
    images: [lancy1, lancy2, lancy3]
  },
  {
    id: 4,
    name: "CK One",
    description: "A refreshing unisex fragrance for everyone.",
    price: "5,045/-",
    sizes: ["50ml", "100ml"],
    images: [ck, ck2, ck3]
  },
  {
    id: 5,
    name: "Nautica",
    description: "An aquatic fragrance that captures the essence of the sea.",
    price: "3,363/-",
    sizes: ["50ml", "100ml"],
    images: [na1, na2, na3]
  },
];

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // State to manage reviews
  const [reviews, setReviews] = useState([
    { name: 'Alice', comment: 'Amazing scent, lasts all day!', rating: 5 },
    { name: 'Bob', comment: 'Great fragrance, but a bit pricey.', rating: 4 }
  ]);

  // State for new review input
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <span className="product-price">{product.price}</span>

      <h3>Available Sizes</h3>
      <ul className="sizes-list">
        {product.sizes.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>

      <h3>Images Gallery</h3>
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.name} ${index + 1}`} className="gallery-image" />
        ))}
      </div>

      <button className="share-button">Share on Social Media</button>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Customer Reviews</h3>

        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <h4>{review.name} ({review.rating} ★)</h4>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}

        {/* Review Form */}
        <form onSubmit={handleSubmitReview} className="review-form">
          <h4>Write a Review</h4>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            placeholder="Your Review"
            required
          />
          <label>
            Rating:
            <select name="rating" value={newReview.rating} onChange={handleInputChange}>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Terrible</option>
            </select>
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default ProductPage;
