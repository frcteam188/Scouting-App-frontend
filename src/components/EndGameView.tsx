import React, { useState, useEffect } from "react";
import GamePieceCounter from "./GamePieceCounter";
import Toggle from "./Toggle";

function MiscView({ onFormDataChange }) {
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

  // Add comments
  return (
    <div className="AutoView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      <Toggle
        label="Balanced"
        value={false}
        onChange={(value) => handleToggleChange("Balanced", value)}
      />

      <Toggle
        label="Parked"
        value={false}
        onChange={(value) => handleToggleChange("Parked", value)}
      />

      <Toggle
        label="Defense"
        value={false}
        onChange={(value) => handleToggleChange("Defense", value)}
      />
    </div>
  );
}

export default MiscView;
