import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

interface Station {
  id: number;
  name: string;
}

interface StationDropdownProps {
  stations: Station[];
  onSelect: (station: Station) => void;
}

function StationDropdown(props: StationDropdownProps) {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  function handleSelect(station: Station) {
    setSelectedStation(station);
    props.onSelect(station);
  }

  const stationNames = ["red1", "red2", "red3", "blue1", "blue2", "blue3"];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedStation?.name || "Select a station"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {stationNames.map((name, index) => (
          <Dropdown.Item
            key={index}
            active={selectedStation?.name === name}
            onClick={() => handleSelect({ id: index, name })}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default StationDropdown;
