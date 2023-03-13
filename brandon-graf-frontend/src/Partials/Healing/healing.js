import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

// ====== COMPONENTS ======
import HealingMenu from "./healingMenu";
import HealingFooter from "./healingFooter";

function HealingApp() {

  return (
    <>
        <HealingMenu />
        <HealingFooter />
    </>
  );
}

export default HealingApp;