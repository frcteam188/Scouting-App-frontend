import React from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "../components/Navbar";

export default function Scout() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("station");

  return (
    <div>
      <Navigation title={"Scout View"} />
      <h1>Scout</h1>
      <p>{id}</p>
    </div>
  );
}
