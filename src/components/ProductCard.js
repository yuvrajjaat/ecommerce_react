import React from 'react';

function ProductCard({ product, onClick }) {
  // Truncate long titles
  const truncatedTitle = product.title.length > 40
    ? product.title.substring(0, 40) + '...'
    : product.title;

  // Example "New" badge for demonstration
  // (You can show this conditionally based on real data)
  const isNew = product.id % 2 === 0; // dummy condition

  // Example rating star rendering
  const rating = Math.round(product.rating.rate);
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <i
        key={i}
        className={`fa-star ${i < rating ? 'fas' : 'far'}`}
        style={{ color: '#FFD700' }}
      />
    ));

  return (
    <div className="product-card" onClick={onClick}>
      {isNew && <span className="new-badge">NEW</span>}
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h4 className="product-title">{truncatedTitle}</h4>
        <div className="product-rating">
          {stars}
          <span className="rating-count">({product.rating.count} reviews)</span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="btn-add-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
