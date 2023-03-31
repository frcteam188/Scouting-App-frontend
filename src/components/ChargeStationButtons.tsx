import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ChargeStationButtons(props) {
  const [pos, setPos] = useState("");

  const handleClick = (position) => {
    setPos(position);
    props.onSelect(position);
  };

  return (
    <>
      {
        <Row>
          {!props.auto && (
            <Col>
              <Button
                onClick={() => handleClick("park")}
                variant={pos === "park" ? "success" : "secondary"}
              >
                {"Park"}
              </Button>
            </Col>
          )}{" "}
          <Col>
            <Button
              onClick={() => handleClick("docked")}
              variant={pos === "docked" ? "success" : "secondary"}
            >
              {"Docked"}
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => handleClick("engage")}
              variant={pos === "engage" ? "success" : "secondary"}
            >
              {"Engage"}
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => handleClick("messedup")}
              variant={pos === "messedup" ? "danger" : "secondary"}
            >
              {"Messedup"}
            </Button>
          </Col>
        </Row>
      }
    </>
  );
}

export default ChargeStationButtons;
