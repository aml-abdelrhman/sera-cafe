import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    item: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Order Placed!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nItem: ${formData.item}\nQuantity: ${formData.quantity}`);
  };

  return (
    <Container className="py-5" id="order">
      <h2 className="text-center mb-4">Place Your Order</h2>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="item">
              <Form.Label>Select Item</Form.Label>
              <Form.Select
                name="item"
                value={formData.item}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose an item --</option>
                <option value="Cappuccino">☕ Cappuccino</option>
                <option value="Latte">🥛 Latte</option>
                <option value="Espresso">⚡ Espresso</option>
                <option value="Mocha">🍫 Mocha</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" variant="warning" className="mt-3">
            Submit Order
          </Button>

        <Button variant="secondary" className="m-2d-block w-100 mt-2" onClick={() => navigate(-1)}>
        Go Back
        </Button>
   
        </div>
      </Form>
    </Container>
  );
}

export default Order;
