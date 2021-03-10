import "./App.css";
import { LeftDrawer } from "./Components/leftDrawer/App/LeftDrawer";
import React from "react";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <Routes />
    </div>
  );
}

export default App;
