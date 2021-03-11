import "./App.css";
import { LeftDrawer } from "./Components/leftDrawer/App/LeftDrawer";
import React from "react";
import { Routes } from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <LeftDrawer />
      <Routes />
      <Footer></Footer>
    </div>
  );
}

export default App;
