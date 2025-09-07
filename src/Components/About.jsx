import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
  <Container fluid id="about" className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src="https://images.pexels.com/photos/6309841/pexels-photo-6309841.jpeg" fluid rounded />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <h>
            At Sera Café, we offer a stylish and modern coffee experience.  
            Every cup is crafted with passion, paired with delightful desserts,  
            and served in a cozy, elegant atmosphere perfect for friends and family.
          </h>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
