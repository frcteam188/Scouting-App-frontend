import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

interface Team {
  id: number;
  name: string;
}

interface TeamDropdownProps {
  teams: Team[];
  onSelect: (team: Team) => void;
}

function TeamDropdown(props: TeamDropdownProps) {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  function handleSelect(team: Team) {
    setSelectedTeam(team);
    props.onSelect(team);
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedTeam?.name || "Select a team"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.teams.map((team: Team) => (
          <Dropdown.Item
            key={team.id}
            active={selectedTeam === team}
            onClick={() => handleSelect(team)}
          >
            {team.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TeamDropdown;
