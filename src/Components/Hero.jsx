import React from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <div className="hero-section bg-dark text-white text-center d-flex align-items-center justify-content-center">
      <div className="hero-overlay">
        <h1 className="display-3 fw-bold">Discover the Perfect Brew</h1>
        <p className="lead">Savor every sip of our freshly brewed coffee</p>
        <Button as={HashLink} smooth to="/#menu" variant="light" className="m-2">
        Explore Menu
       </Button>

        <Button as={HashLink} smooth to="/#reservation" variant="warning" className="m-2">
        Book Your Table
       </Button>

      </div>
    </div>
  );
}

export default Hero;
