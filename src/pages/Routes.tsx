import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Scout from "./Scout";
import Strategy from "./Strategy";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scout/:match/:station" element={<Scout />} />
        <Route path="/strategy/match/:matchNum" element={<Strategy />} />
      </Routes>
    </Router>
  );
}
