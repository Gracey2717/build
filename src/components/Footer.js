// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Dad’s Construction Co.</h3>
          <p>
            Building excellence with integrity, innovation, and quality
            craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@dadcompany.com</p>
          <p>Phone: +234 803 553 1793</p>
          <p>Lagos, Nigeria</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://wa.me/2348035531793" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dad’s Construction Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
