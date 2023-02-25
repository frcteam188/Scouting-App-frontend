import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function MyComponent({ label, onCountChange }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h6>{label}</h6>
        </Col>
        <Col md={6}>
          <div className="counter-container d-flex align-items-center">
            <Button
              variant="danger"
              onClick={handleDecrement}
              className="w-25"
              disabled={count === 0}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={count}
              readOnly
              className="w-50 mx-3 text-center"
            />
            <Button
              variant="success"
              onClick={handleIncrement}
              className="w-25"
            >
              +
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyComponent;
