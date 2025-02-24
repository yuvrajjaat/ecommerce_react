import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector((state) => state.cart.count);

  return (
    <header className="header">
      <div className="header-left">
        {/* Hamburger icon (optional) */}
        <i className="fas fa-bars"></i>
        <nav className="main-nav">
          <a href="#home">Home Page</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
          <a href="#more">More Options</a>
        </nav>
      </div>

      <div className="header-right">
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
