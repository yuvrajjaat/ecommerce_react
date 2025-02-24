import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function ProductModal({ productId, closeModal }) {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error fetching product details', err));
  }, [productId]);

  useEffect(() => {
    // Focus on the modal when it opens, allow ESC to close
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    if (modalRef.current) {
      modalRef.current.focus();
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleAddToCart = () => {
    dispatch(addToCart());
    closeModal();
  };

  if (!product) {
    return (
      <div
        className="modal-overlay"
        onClick={closeModal}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
          tabIndex="-1"
        >
          <h2>Loading...</h2>
          <button onClick={closeModal} className="close-button">
            &times;
          </button>
        </div>
      </div>
    );
  }

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
    <div
      className="modal-overlay"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex="-1"
      >
        <button
          className="close-button"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-product">
          <div className="modal-image-wrap">
            <img
              src={product.image}
              alt={product.title}
              className="modal-image"
            />
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{product.title}</h2>
            <div className="modal-rating">
              {stars}
              <span className="rating-count">
                ({product.rating.count} reviews)
              </span>
              <span className="in-stock">| In Stock</span>
            </div>
            <p className="modal-price">${product.price.toFixed(2)}</p>
            <p className="modal-description">{product.description}</p>

            {/* Example quantity & color (static placeholders) */}
            <div className="modal-options">
              <label>
                Quantity:
                <input type="number" min="1" defaultValue="1" />
              </label>
              <label>
                Color:
                <select>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>Red</option>
                </select>
              </label>
            </div>

            <div className="modal-buttons">
              <button onClick={handleAddToCart} className="btn-add-cart">
                <i className="fas fa-cart-plus"></i> Add To Cart
              </button>
              <button className="btn-buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
