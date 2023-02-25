import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Toggle.css";

function Toggle({ label, value, onChange }) {
  const [isCompleted, setIsCompleted] = useState(value);

  const handleToggle = () => {
    const newValue = !isCompleted;
    setIsCompleted(newValue);
    onChange(newValue);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h6>{label}</h6>
        </Col>
        <Col sm={6}>
          <Button
            variant={isCompleted ? "success" : "danger"}
            className={`square ${isCompleted ? "completed" : "not-completed"}`}
            onClick={handleToggle}
          >
            {isCompleted ? "Completed" : "Not Completed"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Toggle;
