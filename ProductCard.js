// src/components/ProductCard.js
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={product.images[0]} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
