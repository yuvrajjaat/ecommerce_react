import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Exclusives */}
        <div className="footer-col">
          <h4>Exclusives</h4>
          <ul>
            <li><a href="#!">Deals</a></li>
            <li><a href="#!">Specials</a></li>
            <li><a href="#!">Gift Cards</a></li>
          </ul>
        </div>

        {/* Column 2: Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        {/* Column 3: Follow Us */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#!"><i className="fab fa-facebook-f"></i></a>
            <a href="#!"><i className="fab fa-instagram"></i></a>
            <a href="#!"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&copy; 2025 My Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
