import React from "react";
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'; 

function MyFooter() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>© 2025 Sera Café | All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;
