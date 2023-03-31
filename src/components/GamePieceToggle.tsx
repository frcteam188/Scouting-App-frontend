import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const GamePieceToggle = ({ onReset }) => {
  const [state, setState] = useState("pickup");

  const handleClick = () => {
    switch (state) {
      case "pickup":
        setState("attempt");
        break;
      case "attempt":
        setState("scored");
        break;
      case "scored":
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setState("pickup");
    onReset();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>

        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>

        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>

        <Col>
          <Button
            variant="danger"
            // onClick={handleScoredDecrement}
            onClick={handleClick}
            // className="w-25 h-25"
            // disabled={scoredCount === 0}
          >
            {state}
          </Button>
        </Col>
      </Row>

      {/* <Button
        variant="danger"
        // onClick={handleScoredDecrement}
        onClick={handleClick}
        className="w-25"
        // disabled={scoredCount === 0}
      >
        {state}
      </Button>
 */}
      {/* <Button variant="primary" onClick={handleClick}>
        {state}
      </Button> */}
      <Button variant="secondary" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
};

export default GamePieceToggle;
