import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

import appHeight from "./appHeight" // Needs to be imported to work

// ====== COMPONENTS ======
import Landing from "./Landing";
import About from './Dance/About/about';
import DanceMenu from './Partials/danceMenu';
import HealingMenu from "./Partials/healingMenu";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dance" element={<DanceMenu />} />
        <Route path="/dance/about" element={<About />} />
        <Route path="/healing" element={<HealingMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
