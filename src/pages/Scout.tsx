import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navbar";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AutoView from "../components/AutoView";
import TeleView from "../components/TeleView";

export default function Scout() {
  let { match, station } = useParams();
  const [teamNumber, setTeamNumber] = useState(0);

  if (!match || !station) {
    match = "1";
    station = "red1";
  }

  useEffect(() => {
    getTeamNumber(station, match).then((teamNumber) => {
      teamNumber ? setTeamNumber(teamNumber) : setTeamNumber(188);
    });
  }, []);

  const getTeamNumber = async (station, match) => {
    try {
      const response = await axios.get("localhost:4000/ap/v1/getTeamNumber", {
        params: {
          station: station,
          match: match,
        },
      });
      return response.data.teamNumber;
    } catch (error) {
      console.error(error);
    }
  };

  const title = `Match: ${match} Team: ${teamNumber} Station: ${station}`;
  let bg;
  if (station.includes("blue")) {
    bg = "primary";
  } else if (station.includes("red")) {
    bg = "danger";
  } else {
    bg = "dark";
  }
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  const [formData, setFormData] = useState({});

  const handleFormDataChange = (label, newFormData) => {
    setFormData((prevFormData) => ({ ...prevFormData, [label]: newFormData }));
  };

  return (
    <div>
      <Navigation title={title} bg={bg} />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{teamNumber}</Card.Title>
            <Card.Text>
              {" "}
              <pre>parent formData: {JSON.stringify(formData, null, 2)}</pre>
            </Card.Text>
          </Card.Body>
        </Card>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={handleTabSelect}
          forceRenderTabPanel
        >
          <TabList>
            <Tab>Auto</Tab>
            <Tab>Tele</Tab>
            <Tab>Misc</Tab>
          </TabList>

          <TabPanel>
            <AutoView
              onFormDataChange={(autoFromData) =>
                handleFormDataChange("autoData", autoFromData)
              }
            ></AutoView>
          </TabPanel>
          <TabPanel>
            {" "}
            <TeleView
              onFormDataChange={(teleFormData) =>
                handleFormDataChange("teleData", teleFormData)
              }
            ></TeleView>
          </TabPanel>
          <TabPanel>
            {" "}
            <h1>Misc</h1>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}
