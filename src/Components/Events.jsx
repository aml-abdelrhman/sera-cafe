import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Events.css";
import { Link } from "react-router-dom"; 

const events = [
  {
    title: "Coffee Tasting Workshop",
    date: "Sep 18, 2025",
    description: "Join us for a stylish evening filled with the aroma of freshly brewed coffee.",
    img: "https://images.pexels.com/photos/7176003/pexels-photo-7176003.jpeg"
  },
  {
    title: "Special Gathering Night",
    date: "Sep 26, 2025",
    description: "A wonderful night with music, friends, and unforgettable café vibes.",
    img: "https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg"
  },
  {
    title: "Coffee & Cake Delight",
    date: "Oct 3, 2025",
    description: "Taste our finest coffee paired with delicious cakes for the perfect treat.",
    img: "https://images.pexels.com/photos/8892219/pexels-photo-8892219.jpeg"
  }
];

function Events() {
  return (
    <Container id="events" className="py-5">
      <h2 className="text-center mb-4">Upcoming Events</h2> {/* ✅ استخدمي h2 أو h1 */}
      <Row>
        {events.map((event, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="event-card h-100">
              <Card.Img variant="top" src={event.img} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button as={Link} to={`/events/${idx}`} variant="warning">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;
