import React, { useState } from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import "./PreloadToggle.css";

function PreloadToggle({ value, onChange }) {
  const [isCube, setIsCube] = useState(value);

  const coneImage = "/cone.jpeg";
  const cubeImage = "/cube.jpeg";

  const imageSrc = isCube ? coneImage : cubeImage;

  const handleToggle = () => {
    const newValue = !isCube;
    setIsCube(newValue);
    onChange(newValue ? "cone" : "cube");
  };

  return (
    <div>
      <Row>
        <Col md={3}>
          <h3>Preload</h3>
        </Col>
        <Col sm={6}>
          <Button
            variant="light"
            onClick={handleToggle}
            className="preloadSquare p-0 border-0"
          >
            <Image src={imageSrc} alt={isCube ? "cube" : "cone"} fluid />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default PreloadToggle;
