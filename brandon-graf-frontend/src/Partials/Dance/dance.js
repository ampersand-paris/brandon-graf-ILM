import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

// ====== COMPONENTS ======
import DanceMenu from './danceMenu';
import DanceFooter from "./danceFooter";
import About from "../../Dance/about";

function DanceApp() {

  return (
    <>
      <DanceMenu />
      <DanceFooter />
    </>
  );
}

export default DanceApp;