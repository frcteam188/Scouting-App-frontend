import React, { useState, useEffect } from "react";
import GamePieceCounter from "./GamePieceCounter";

function TeleView({ onFormDataChange }) {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleCountChange = (label, type, newCount) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [label]: { ...prevFormData[label], [type]: newCount },
    }));
  };

  return (
    <div className="AutoView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      <GamePieceCounter
        label="Cones"
        onCountChange={(type, count) => handleCountChange("Cones", type, count)}
      />

      <GamePieceCounter
        label="Cubes"
        onCountChange={(type, count) => handleCountChange("Cubes", type, count)}
      />
    </div>
  );
}

export default TeleView;
