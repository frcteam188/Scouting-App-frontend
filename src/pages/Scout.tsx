import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navbar";
import { Container, Card, Image } from "react-bootstrap";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AutoView from "../components/AutoView";
import TeleView from "../components/TeleView";
import EndGameView from "../components/EndGameView";
import "./Scout.css";

export default function Scout() {
  let { match, station } = useParams();
  const [teamNumber, setTeamNumber] = useState(188);

  if (!match || !station) {
    match = "1";
    station = "red1";
  }

  // useEffect(() => {
  //   // getTeamNumber(station, match).then((teamNumber) => {
  //   //   teamNumber ? setTeamNumber(teamNumber) : setTeamNumber(188);
  //   // });
  // }, [match, station]);

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
  const [currentGamePiece, setCurrentGamePiece] = useState("");

  const handleFormDataChange = (label, newFormData) => {
    // setFormData((prevFormData) => ({ ...prevFormData, [label]: newFormData }));
  };

  /*format
  currentGamePiece  {
    gamePiece: "cone", " cube"
    pickedUpFrom: "preload", "presetGround", "humanGround", "humanChute", "humanLoadStation"
    scoredAt: "level1", "level2", "level3"
    coopScore: true, false
  }

  each pickup button will have prop {
    area: 
    gamePiece: 
  } 
  and will send the parent (AutoView, TeleView) letting them know when a gamepiece is picked up

  each score button will have prop { 
    level: 
  }
  and will send the parent (AutoView, TeleView) letting it know when there is a gamepiece attempted / scored / failed

  page component keeps track of if there a gamepiece in the robot, 
  page component will keep a track of scored game pieces



Scenario 1
  Auto
  - preload a cone/cube
  - score on level 2
  - cross mobility line
  - pick up another cube
  - balance 

  Tele 
  - score the cube 
  - pick up from the human player station 
  - score the cube
  ... 
  - balance 

Scenario 2
  Auto
  - preload a cone/cube
  - score on level 2
  - cross mobility line
  - pick up another cube
  - attempt to score and miss 
  - balance 

  Tele 
  - pick up from the human player station 
  - score the cube
  ... 
  - balance 

  Learnings
  - Main scout page needs to know what the robot currently is holding 
  - need to know if the gamepiece got scored or failed 
  - keep an array of number of cycles 
    - using the number of cycles keep track of scored/attempted
  - store data using react store for the match you are on
  - store the match data in the localstorage as (event: match: station: team) when saving
  - create a qr code with formdata that can be used to upload to backend through a phone
  - have ability to view past game data and edit it
  - 
  */

  const coneImage = "/cone.jpeg";
  const cubeImage = "/cube.jpeg";

  let imageSrc = "";
  if (currentGamePiece === "cone") imageSrc = coneImage;
  else if (currentGamePiece === "cube") imageSrc = cubeImage;

  return (
    <div>
      <Navigation title={title} bg={bg} />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{teamNumber}</Card.Title>
            <Card.Text>
              {" "}
              {`currentGamePiece :`}
              {imageSrc !== "" && (
                <Image
                  className="preloadSquare p-0 border-0"
                  src={imageSrc}
                  alt={currentGamePiece === "cone" ? "cube" : "cone"}
                  fluid
                />
              )}
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
              currentGamePiece={currentGamePiece}
              setCurrentGamePiece={setCurrentGamePiece}
            ></AutoView>
          </TabPanel>
          <TabPanel>
            <TeleView
              onFormDataChange={(teleFormData) =>
                handleFormDataChange("teleData", teleFormData)
              }
              currentGamePiece={currentGamePiece}
              setCurrentGamePiece={setCurrentGamePiece}
            ></TeleView>
          </TabPanel>
          <TabPanel>
            <EndGameView
              onFormDataChange={(endGameFormData) =>
                handleFormDataChange("endGameData", endGameFormData)
              }
            ></EndGameView>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}
