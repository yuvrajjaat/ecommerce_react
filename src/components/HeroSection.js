import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h1>Welcome to <span>My Store</span></h1>
        <h2>Your Shopping Destination</h2>
        <p>
          Discover a wide range of products at the best price. 
          Shop with ease and convenience. We value your satisfaction!
        </p>
        <a href="#products" className="btn-primary">Shop Now</a>
      </div>
    </section>
  );
}

export default HeroSection;
