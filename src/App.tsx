import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Navbar, NavItem } from "react-bootstrap";
import Navigation from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation title={"Home Page"} />
      <h1> home</h1>
    </div>
  );
}

export default App;
