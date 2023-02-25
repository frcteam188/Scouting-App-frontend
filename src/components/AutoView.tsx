import React, { useState } from "react";
import Counter from "./Counter";
import PreloadToggle from "./PreloadToggle";
import Toggle from "./Toggle";

function AutoView() {
  const counters = [
    { label: "ConesAcquired" },
    { label: "ConesScored" },
    { label: "CubesAcquired" },
    { label: "CubesScored" },
  ];
  const [formData, setFormData] = useState({});

  const handleCountChange = (label, newCount) => {
    setFormData((prevFormData) => ({ ...prevFormData, [label]: newCount }));
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
      ></PreloadToggle>

      <Toggle
        label="AutoLine"
        value={false}
        onChange={(value) => handleToggleChange("AutoLine", value)}
      ></Toggle>

      {counters.map((counter) => (
        <Counter
          label={counter.label}
          onCountChange={(count) => handleCountChange(counter.label, count)}
        ></Counter>
      ))}
    </div>
  );
}

export default AutoView;
