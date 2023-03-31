import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Form, Container, Button, NavItem } from "react-bootstrap";
import Navigation from "./components/Navbar";
import StationDropdown from "./components/StationDropdown";

interface Station {
  id: number;
  name: string;
}

function App() {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [matchNumber, setMatchNumber] = useState<number | undefined>(undefined);

  function handleStationSelect(station: Station) {
    setSelectedStation(station);
  }

  function handleMatchNumberChange(event) {
    const matchNumber = Number(event.target.value);
    setMatchNumber(isNaN(matchNumber) ? undefined : matchNumber);
  }

  function handleSubmit() {
    if (!selectedStation || matchNumber === undefined) {
      return;
    }

    const url = `/scout/${matchNumber}/${selectedStation.name}`;
    window.location.href = url;
  }

  return (
    <div className="App">
      <Navigation title={"Home Page"} />
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="matchNumberInput">
                <Form.Label>Match Number</Form.Label>
                <Form.Control
                  type="number"
                  value={matchNumber ?? ""}
                  onChange={handleMatchNumberChange}
                />
              </Form.Group>
              <StationDropdown stations={[]} onSelect={handleStationSelect} />
              <p>Selected Station: {selectedStation?.name || "None"}</p>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
