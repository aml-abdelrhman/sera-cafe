import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import './MyNavbar.css'; 

function MyNavbar() {
  return (
    <Navbar 
      expand="lg" 
      style={{ backgroundColor: "#f8f1e7", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }} 
      variant="light" 
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="text-dark fw-bold fs-3">☕ Sera Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#menu" className="nav-link-custom">Menu</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
          <Button as={Link} to="/order" variant="warning" className="ms-3 btn-custom">
            Order Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
