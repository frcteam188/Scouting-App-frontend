import React, { useState, useEffect } from "react";
import GamePieceCounter from "./GamePieceCounter";
import PreloadToggle from "./PreloadToggle";
import Toggle from "./Toggle";
import { Button, Col, Container, Row } from "react-bootstrap";
import GamePieceToggle from "./GamePieceToggle";
import PickUpButton from "./PickUpButton";
import ScoreButton from "./ScoreButton";

function AutoView({ onFormDataChange }) {
  const [formData, setFormData] = useState({
    autoConeScore: { low: 0, mid: 0, high: 0 },
    autoCubeScore: { low: 0, mid: 0, high: 0 },
    Holding: false,
    Preload: false,
    AutoLine: false,
  });
  const [holding, setHolding] = useState("");
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleCountChange = (label, type, newCount) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [label]: { ...prevFormData[label], [type]: newCount },
    }));
  };

  const handleToggleChange = (label, newValue) => {
    setFormData((prevFormData) => ({ ...prevFormData, [label]: newValue }));
  };

  const [resetToggle, setResetToggle] = useState(false);

  const handleResetToggle = () => {
    setResetToggle(!resetToggle);
    setHolding("");
    setFormData((prevFormData) => ({ ...prevFormData }));
  };

  const handlePickup = (piece) => {
    setHolding(piece);
    setFormData((prevFormData) => ({ ...prevFormData, Holding: piece }));
  };

  const handleConeScore = (level) => {
    setHolding("");
    const prevData = { ...formData };
    prevData.autoConeScore[level] = formData.autoConeScore[level] + 1;
    setFormData({ ...prevData });
  };
  const handleCubeScore = (level) => {
    setHolding("");
    const prevData = { ...formData };
    prevData.autoCubeScore[level] = formData.autoCubeScore[level] + 1;
    setFormData({ ...prevData });
  };

  // TODO: Add Starting postion 3 stage toggle
  return (
    <div className="AutoView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      <PreloadToggle
        value={false}
        onChange={(value) => {
          handleToggleChange("Preload", value);
          setHolding(value);
        }}
      />

      <Toggle
        label="AutoLine"
        value={false}
        onChange={(value) => handleToggleChange("AutoLine", value)}
      />
      <Container>
        <Row>
          <h3>Pickup</h3>
          <Col md={2}>
            <h4>Cone</h4>
            <PickUpButton
              show={holding !== ""}
              onClick={() => handlePickup("cone")}
              location="Ground"
              onReset={() => setHolding("")}
            />
          </Col>
          <Col md={2}>
            <h4>Cube</h4>
            <PickUpButton
              show={holding !== ""}
              onClick={() => handlePickup("cube")}
              location="Ground"
              onReset={() => setHolding("")}
            />
          </Col>
        </Row>
        <Row>
          <h3>Score</h3>
          <Col md={2}>
            <h4>Cone</h4>
            <Row>
              <ScoreButton
                show={holding === "cone"}
                onClick={() => handleConeScore("low")}
                location="Low"
                onReset={() => setHolding("")}
              />
            </Row>
            <Row>
              <ScoreButton
                show={holding === "cone"}
                onClick={() => handleConeScore("mid")}
                location="Mid"
                onReset={() => setHolding("")}
              />
            </Row>
            <Row>
              <ScoreButton
                show={holding === "cone"}
                onClick={() => handleConeScore("high")}
                location="High"
                onReset={() => setHolding("")}
              />
            </Row>
          </Col>
          <Col md={2}>
            <h4>Cube</h4>
            <Row>
              <ScoreButton
                show={holding === "cube"}
                onClick={() => handleCubeScore("low")}
                location="Low"
                onReset={() => setHolding("")}
              />
            </Row>
            <Row>
              <ScoreButton
                show={holding === "cube"}
                onClick={() => handleCubeScore("mid")}
                location="Mid"
                onReset={() => setHolding("")}
              />
            </Row>
            <Row>
              <ScoreButton
                show={holding === "cube"}
                onClick={() => handleCubeScore("high")}
                location="High"
                onReset={() => setHolding("")}
              />
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <GamePieceCounter
        label="Cones"
        onCountChange={(type, count) => handleCountChange("Cones", type, count)}
      />

      <GamePieceCounter
        label="Cubes"
        onCountChange={(type, count) => handleCountChange("Cubes", type, count)}
      /> */}

      <Toggle
        label="Engaged"
        value={false}
        onChange={(value) => handleToggleChange("Engaged", value)}
      />

      <Toggle
        label="Docked"
        value={false}
        onChange={(value) => handleToggleChange("Docked", value)}
      />

      <div>
        {/* <GamePieceToggle onReset={handleResetToggle} /> */}
        <Button variant="secondary" onClick={handleResetToggle}>
          Reset Toggle
        </Button>
      </div>
    </div>
  );
}

export default AutoView;
