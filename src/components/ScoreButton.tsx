import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ScoreButton(props) {
  const [show, setShow] = useState(props.show);

  const handleClick = (position) => {
    const newValue = !show;
    setShow(newValue);
    props.handleClick(position);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>
      {
        <div>
          <Row>
            <Button onClick={() => handleClick("low")} disabled={!show}>
              {"Low"}
            </Button>
          </Row>
          <Row>
            <Button onClick={() => handleClick("mid")} disabled={!show}>
              {"Mid"}
            </Button>
          </Row>
          <Row>
            <Button onClick={() => handleClick("high")} disabled={!show}>
              {"High"}
            </Button>
          </Row>
        </div>
      }
    </>
  );
}

export default ScoreButton;
