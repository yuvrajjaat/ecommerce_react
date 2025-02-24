import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';

function App() {
  // Modal state to track which product is open
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Features />
      <ProductList onProductClick={handleProductClick} />
      {selectedProductId && (
        <ProductModal productId={selectedProductId} closeModal={closeModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
