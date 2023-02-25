import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import PreloadToggle from "./PreloadToggle";
import Toggle from "./Toggle";

function TeleView({ onFormDataChange }) {
  const counters = [
    { label: "ConesAcquired" },
    { label: "ConesScored" },
    { label: "CubesAcquired" },
    { label: "CubesScored" },
  ];
  const [formData, setFormData] = useState({});
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleCountChange = (label, newCount) => {
    setFormData((prevFormData) => ({ ...prevFormData, [label]: newCount }));
  };

  return (
    <div className="TeleView">
      <code>formData{JSON.stringify(formData, null, 2)}</code>

      {counters.map((counter) => (
        <Counter
          label={counter.label}
          onCountChange={(count) => handleCountChange(counter.label, count)}
        ></Counter>
      ))}
    </div>
  );
}

export default TeleView;
