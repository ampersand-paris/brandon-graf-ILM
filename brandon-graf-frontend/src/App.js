import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

import appHeight from "./appHeight" // Needs to be imported to work

// ====== COMPONENTS ======
import Landing from "./Landing";
import About from './Dance/About/about';
import DanceMenu from './Partials/Dance/danceMenu';
import HealingMenu from "./Partials/Healing/healingMenu";
import DanceApp from "./Partials/Dance/dance";
import HealingApp from "./Partials/Healing/healing";
import DanceFooter from "./Partials/Dance/danceFooter";
import StudioServices from "./Dance/About/studioServices";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* <Route path="/dance" element={<DanceApp />} >  */}
          <Route path="/dance/about" element={<><DanceMenu /> <About /> <DanceFooter /></>} />
          <Route path="/dance/studio-services" element={<><DanceMenu /> <StudioServices /> <DanceFooter /></>} />
        {/* </Route> */}
        <Route path="/healing" element={<HealingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
