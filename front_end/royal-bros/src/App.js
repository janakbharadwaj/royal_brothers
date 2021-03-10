import "./App.css";
import { LeftDrawer } from "./Components/leftDrawer/App/LeftDrawer";
import React from "react";
import Tarrif from "./Components/Tarrif/Tarrif";
import Bikes from "./Components/Bikes/Bikes";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <LeftDrawer />
      {/* <Tarrif></Tarrif> */}
      {/* <Bikes></Bikes> */}
      <Routes/>
    </div>
  );
}

export default App;
