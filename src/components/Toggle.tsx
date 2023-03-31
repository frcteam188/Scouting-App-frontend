import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

function Toggle({ label, value, onChange }: ToggleProps) {
  const [isCompleted, setIsCompleted] = useState(value);

  const handleToggle = () => {
    const newValue = !isCompleted;
    setIsCompleted(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <Row>
        {label && (
          <Col md={6}>
            <h3>{label}</h3>
          </Col>
        )}
        <Col>
          <Button
            variant={isCompleted ? "success" : "secondary"}
            className={`square ${isCompleted ? "completed" : "not-completed"}`}
            onClick={handleToggle}
          >
            {isCompleted ? "Completed" : "Not Completed"}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Toggle;
