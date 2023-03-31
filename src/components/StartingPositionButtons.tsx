import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function StartingPositionButtons(props) {
  const [startingPos, setStartingPos] = useState("");

  const handleClick = (position) => {
    setStartingPos(position);
    props.onSelect(position);
  };

  return (
    <>
      {
        <Row>
          <Col>
            <Button
              onClick={() => handleClick("bump")}
              variant={startingPos === "bump" ? "success" : "secondary"}
            >
              {"Bump"}
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => handleClick("middle")}
              variant={startingPos === "middle" ? "success" : "secondary"}
            >
              {"Middle"}
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => handleClick("open")}
              variant={startingPos === "open" ? "success" : "secondary"}
            >
              {"Open"}
            </Button>
          </Col>
        </Row>
      }
    </>
  );
}

export default StartingPositionButtons;
