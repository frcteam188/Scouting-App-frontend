import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function GamePieceCounter({ label, onCountChange }) {
  const [acquiredCount, setAcquiredCount] = useState(0);
  const [scoredCount, setScoredCount] = useState(0);

  const handleAcquiredIncrement = () => {
    const newAcquiredCount = acquiredCount + 1;
    setAcquiredCount(newAcquiredCount);
    onCountChange("Acquired", newAcquiredCount);
  };

  const handleAcquiredDecrement = () => {
    const newAcquiredCount = acquiredCount - 1;
    setAcquiredCount(newAcquiredCount);
    onCountChange("Acquired", newAcquiredCount);
  };

  const handleScoredIncrement = () => {
    const newScoredCount = scoredCount + 1;
    setScoredCount(newScoredCount);
    onCountChange("Scored", newScoredCount);
  };

  const handleScoredDecrement = () => {
    const newScoredCount = scoredCount - 1;
    setScoredCount(newScoredCount);
    onCountChange("Scored", newScoredCount);
  };

  return (
    <Container>
      <Row className="py-3">
        <Col md={5}>
          <h6>{label}</h6>
        </Col>
        <Col md={1}>
          <h6>Acquired</h6>
        </Col>
        <Col md={6}>
          <div className="counter-container d-flex align-items-center">
            <Button
              variant="danger"
              onClick={handleAcquiredDecrement}
              className="w-25"
              disabled={acquiredCount === 0 || scoredCount > 0}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={acquiredCount}
              readOnly
              className="w-50 mx-3 text-center"
            />
            <Button
              variant="success"
              onClick={handleAcquiredIncrement}
              className="w-25"
            >
              +
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={5}></Col>
        <Col md={1}>
          <h6>Scored</h6>
        </Col>
        <Col md={6}>
          <div className="counter-container d-flex align-items-center mt-2">
            <Button
              variant="danger"
              onClick={handleScoredDecrement}
              className="w-25"
              disabled={scoredCount === 0}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={scoredCount}
              readOnly
              className="w-50 mx-3 text-center"
            />
            <Button
              variant="success"
              onClick={handleScoredIncrement}
              className="w-25"
              disabled={scoredCount >= acquiredCount}
            >
              +
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GamePieceCounter;
