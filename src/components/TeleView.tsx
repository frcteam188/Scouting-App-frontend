import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PickUpButton from "./PickUpButton";
import ScoreButton from "./ScoreButton";
import ChargeStationButtons from "./ChargeStationButtons";

function TeleView({ onFormDataChange, currentGamePiece, setCurrentGamePiece }) {
  const [formData, setFormData] = useState({
    autoConeScore: { low: 0, mid: 0, high: 0 },
    autoCubeScore: { low: 0, mid: 0, high: 0 },
    Preload: false,
    AutoLine: false,
  });
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handlePickup = (piece) => {
    setCurrentGamePiece(piece);
    // setFormData((prevFormData) => ({ ...prevFormData, Holding: piece }));
  };

  const handleConeScore = (level) => {
    setCurrentGamePiece("");
    const prevData = { ...formData };
    prevData.autoConeScore[level] = formData.autoConeScore[level] + 1;
    setFormData({ ...prevData });
  };
  const handleCubeScore = (level) => {
    setCurrentGamePiece("");
    const prevData = { ...formData };
    prevData.autoCubeScore[level] = formData.autoCubeScore[level] + 1;
    setFormData({ ...prevData });
  };
  const handleStartingPosition = (position) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      StartingPosition: position,
    }));
  };
  const handleChargeStation = (position) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ChargeStation: position,
    }));
  };

  return (
    <Container className="TeleView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      <Row>
        <Col md={6}>
          <Row>
            <h3>Pickup</h3>
            <Col md={4}>
              <h4>Cone</h4>
              <PickUpButton
                show={currentGamePiece !== ""}
                onClick={() => handlePickup("cone")}
                location="Ground"
                onReset={() => currentGamePiece("")}
              />
              <PickUpButton
                show={currentGamePiece !== ""}
                onClick={() => handlePickup("cone")}
                location="Human Load"
                onReset={() => currentGamePiece("")}
              />
            </Col>
            <Col md={2}></Col>
            <Col md={4}>
              <h4>Cube</h4>
              <PickUpButton
                show={currentGamePiece !== ""}
                onClick={() => handlePickup("cube")}
                location="Ground"
                onReset={() => setCurrentGamePiece("")}
              />
              <PickUpButton
                show={currentGamePiece !== ""}
                onClick={() => handlePickup("cube")}
                location="Human Load"
                onReset={() => setCurrentGamePiece("")}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <h3>Score</h3>
            <Col md={4}>
              <h4>Cone</h4>
              <ScoreButton
                show={currentGamePiece === "cone"}
                handleClick={handleConeScore}
                location="High"
                onReset={() => setCurrentGamePiece("")}
              />
            </Col>
            <Col md={2}></Col>
            <Col md={4}>
              <h4>Cube</h4>
              <ScoreButton
                show={currentGamePiece === "cube"}
                handleClick={handleCubeScore}
                location="Low"
                onReset={() => setCurrentGamePiece("")}
              />
            </Col>
          </Row>
          <Col md={4}>
            <Button
              variant="danger"
              onClick={() => {
                setCurrentGamePiece("");
              }}
            >
              Dropped
            </Button>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <h3>End Game</h3>
          <Col>
            <ChargeStationButtons
              auto={false}
              onSelect={handleChargeStation}
            ></ChargeStationButtons>
          </Col>
        </Col>
      </Row>

      <Row></Row>
    </Container>
  );
}

export default TeleView;
