import React, { useState, useEffect } from "react";
import GamePieceCounter from "./GamePieceCounter";
import PreloadToggle from "./PreloadToggle";
import Toggle from "./Toggle";

function AutoView({ onFormDataChange }) {
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

  const handleToggleChange = (label, newValue) => {
    setFormData((prevFormData) => ({ ...prevFormData, [label]: newValue }));
  };

  return (
    <div className="AutoView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      <PreloadToggle
        value={false}
        onChange={(value) => handleToggleChange("Preload", value)}
      />

      <Toggle
        label="AutoLine"
        value={false}
        onChange={(value) => handleToggleChange("AutoLine", value)}
      />

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

export default AutoView;
