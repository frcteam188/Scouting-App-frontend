import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navbar";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AutoView from "../components/AutoView";
import TeleView from "../components/TeleView";
import EndGameView from "../components/EndGameView";

const data1 = [
  {
    _id: "frc610",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
  {
    _id: "frc188",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
  {
    _id: "frc1114",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
  {
    _id: "frc2056",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
  {
    _id: "frc3683",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
  {
    _id: "frc7558",
    matchesPlayed: 1,
    avgAutoCubePickup: 1,
    avgAutoCubeHighAttempt: 0,
    avgAutoCubeHighScored: 0,
    avgAutoCubeMedAttempt: 1,
    avgAutoCubeMedScored: 1,
    avgAutoCubeLowAttempt: 0,
    avgAutoCubeLowScored: 0,
    avgAutoConePickup: 0,
    avgAutoConeHighAttempt: 0,
    avgAutoConeHighScored: 0,
    avgAutoConeMedAttempt: 1,
    avgAutoConeMedScored: 1,
    avgAutoConeLowAttempt: 0,
    avgAutoConeLowScored: 0,
    avgTeleCubeFloorPickup: 1,
    avgTeleCubeHumanLoad: 2,
    avgTeleCubeHighAttempt: 0,
    avgTeleCubeHighScored: 0,
    avgTeleCubeMedAttempt: 3,
    avgTeleCubeMedScored: 3,
    avgTeleCubeLowAttempt: 0,
    avgTeleCubeLowScored: 0,
    avgTeleConeFloorPickup: 0,
    avgTeleConeHumanLoad: 3,
    avgTeleConeHighAttempt: 0,
    avgTeleConeHighScored: 0,
    avgTeleConeMedAttempt: 3,
    avgTeleConeMedScored: 3,
    avgTeleConeLowAttempt: 0,
    avgTeleConeLowScored: 0,
    mobilityPercent: 100,
    autoDockedPercent: 0,
    autoEngagedPercent: 0,
    autoHighGoalPointAvg: 0,
    autoMedGoalPointAvg: 8,
    autoLowGoalPointAvg: 0,
    teleHighGoalPointAvg: 0,
    teleMedGoalPointAvg: 18,
    teleLowGoalPointAvg: 0,
    parkedPercent: 0,
    dockedPercent: 0,
    engagedPercent: 100,
  },
];

export default function Strategy() {
  let { matchNum } = useParams();
  const [sumData, setSumData] = useState<any[]>([]);

  useEffect(() => {
    getSumData(matchNum).then((sumData) => {
      setSumData(sumData);
    });
  }, [matchNum]);

  const getSumData = async (matchNum) => {
    try {
      const response = await axios.get(
        `https://scouting-api.herokuapp.com/v1/strategy/match/${matchNum}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const title = `Match ${matchNum} Summary`;

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <Navigation title={title} />
      <Container>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={handleTabSelect}
          forceRenderTabPanel
        >
          <TabList>
            <Tab>Auto</Tab>
            <Tab>Tele</Tab>
            <Tab>End Game</Tab>
          </TabList>
          <TabPanel>
            <table>
              <thead>
                <tr>
                  <th>Team Number</th>
                  <th>Matches Played</th>
                  <th>Avg Cube Pickup</th>
                  <th>Avg Cube Attempt</th>
                  <th>Avg Cube Scored</th>
                  <th>Avg Cone Attempt</th>
                  <th>Avg Cone Scored</th>
                  <th>Avg Auto Score</th>
                  <th>Mobility Percent</th>
                  <th>Docked Percent</th>
                  <th>Engaged Percent</th>
                </tr>
              </thead>
              <tbody>
                {sumData.map((item, index) => (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.matchesPlayed}</td>
                    <td>{item.avgAutoCubePickup}</td>
                    <td>
                      <li>{item.avgAutoCubeHighAttempt}</li>
                      <li>{item.avgAutoCubeMedAttempt}</li>
                      <li>{item.avgAutoCubeLowAttempt}</li>
                    </td>
                    <td>
                      <li>{item.avgAutoCubeHighScored}</li>
                      <li>{item.avgAutoCubeMedScored}</li>
                      <li>{item.avgAutoCubeLowScored}</li>
                    </td>
                    <td>
                      <li>{item.avgAutoConeHighAttempt}</li>
                      <li>{item.avgAutoConeMedAttempt}</li>
                      <li>{item.avgAutoConeLowAttempt}</li>
                    </td>
                    <td>
                      <li>{item.avgAutoConeHighScored}</li>
                      <li>{item.avgAutoConeMedScored}</li>
                      <li>{item.avgAutoConeLowScored}</li>
                    </td>
                    <td>
                      <li>{item.autoHighGoalPointAvg}</li>
                      <li>{item.autoMedGoalPointAvg}</li>
                      <li>{item.autoLowGoalPointAvg}</li>
                    </td>
                    <td>{item.mobilityPercent}%</td>
                    <td>{item.autoDockedPercent}%</td>
                    <td>{item.autoEngagedPercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}
