import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductList({ onProductClick }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="product-grid-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;
