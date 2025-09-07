import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from "emailjs-com";
import './Contact.css'; 

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gwgpibp",  
      "template_33hbt8c",  
      form.current,
      "uLdUc3VE0kQDYBMZZ"       
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); 
      },
      (error) => {
        alert("Failed to send message. Try again.");
      }
    );
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="user_name" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="user_email" placeholder="Your Email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" required />
            </Form.Group>
            <Button variant="warning" type="submit">Send Message</Button>
          </Form>
        </Col>

        <Col md={6} className="contact-info">
          <h5>Visit Us</h5>
          <p>123 Safa Street, Giza, Egypt</p>
          <p>📞 +20 100 987 6544</p>
          <div className="map-container">
            <iframe
              title="Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110550.37897707237!2d31.189643150000002!3d30.01678830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458469235579697%3A0x4e91d61f9878fc52!2z2KfZhNis2YrYstip2Iwg2YLYs9mFINin2YTYudmF2LHYp9mG2YrYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2KzZitiy2Kk!5e0!3m2!1sar!2seg!4v1757266294305!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
