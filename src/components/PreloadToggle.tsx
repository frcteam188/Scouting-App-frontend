import React, { useState } from "react";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import "./PreloadToggle.css";

function PreloadToggle({ value, onChange }) {
  const [isCube, setIsCube] = useState(value);

  const coneImage =
    "https://www.studica.ca/content/images/thumbs/0011539_2023-game-piece-cone_415.jpeg";
  const cubeImage =
    "https://www.studica.ca/content/images/thumbs/0011538_2023-game-piece-cube_550.jpeg";

  const imageSrc = isCube ? coneImage : cubeImage;

  const handleToggle = () => {
    const newValue = !isCube;
    setIsCube(newValue);
    onChange(newValue ? "cone" : "cube");
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h6>Preload</h6>
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
    </Container>
  );
}

export default PreloadToggle;
