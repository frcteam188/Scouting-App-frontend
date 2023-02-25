import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Scout from "./Scout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scout/:match/:station" element={<Scout />} />
      </Routes>
    </Router>
  );
}
