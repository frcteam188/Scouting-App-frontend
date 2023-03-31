import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function ScoreButton(props) {
  const [show, setShow] = useState(props.show);

  const handleClick = () => {
    const newValue = !show;
    setShow(newValue);
    props.onClick(newValue);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>
      {
        <Button onClick={handleClick} disabled={show}>
          {props.location}
        </Button>
      }
    </>
  );
}

export default ScoreButton;
