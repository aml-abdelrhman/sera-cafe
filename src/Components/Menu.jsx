import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Menu.css'; 

const items = [
   {title: "Black Coffee", img: "https://images.pexels.com/photos/2130133/pexels-photo-2130133.jpeg", price: "$5.00"},
  {title: "Cappuccino", img: "https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg", price: "$4.50"},
  {title: "espresso", img: "https://images.pexels.com/photos/2668498/pexels-photo-2668498.jpeg", price: "$4.00"},
  {title: "Latte", img: "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg", price: "$4.00"},
  {title: "Mocha", img: "https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg", price: "$5.00"},
  {title: "cupcakes", img: "https://images.pexels.com/photos/1619483/pexels-photo-1619483.jpeg", price: "$6.50"},
  {title: "Cheesecake", img: "https://images.pexels.com/photos/4051674/pexels-photo-4051674.jpeg", price: "$6.50"},
  {title: "Chocolate Cake", img: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg", price: "$6.50"},

];

function Menu() {
  return (
    <Container fluid id="menu" className="py-5">
      <h2 className="text-center mb-5 display-4 fw-bold">Our Menu</h2>
      <Row className="justify-content-center">
        {items.map((item, idx) => (
          <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
            <Card className="menu-card h-100 text-center shadow-sm">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.price}</Card.Text>
                <Button variant="warning" className="w-75">Order</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
