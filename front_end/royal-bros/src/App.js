import './App.css';
import {LeftDrawer} from './Components/leftDrawer/App/LeftDrawer';
import React from "react";
import Tarrif from "./Components/Tarrif/Tarrif";

function App() {
  return (
    <div className="App">
      <LeftDrawer/>
      <Tarrif></Tarrif>
    </div>
  );
}

export default App;
