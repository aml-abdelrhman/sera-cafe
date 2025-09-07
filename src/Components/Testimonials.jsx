import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const reviews = [
  {
    name: "Amal",
    text: "Modern and beautiful cafe.",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    name: "Omar",
    text: "Great coffee and delicious cakes",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
  },
  {
    name: "Sara",
    text: "Amazing experience!, I really loved it.",
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
  },
];

function Testimonials() {
  return (
    <Container id="testimonials" className="py-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {reviews.map((review, idx) => (
          <Col md={4} key={idx}>
            <Card className="text-center mb-4">
              <Card.Img
                variant="top"
                src={review.img}
                className="rounded-circle mx-auto mt-3"
                style={{ width: "80px", height: "80px" }}
              />
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>"{review.text}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
