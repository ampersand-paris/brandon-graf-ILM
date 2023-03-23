import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";

import appHeight from "./appHeight" // Needs to be imported to work

// ====== COMPONENTS ======
import Landing from "./Landing";
import About from './Dance/about';
import DanceMenu from './Partials/Dance/danceMenu';
import HealingMenu from "./Partials/Healing/healingMenu";
import DanceApp from "./Partials/Dance/dance";
import HealingApp from "./Partials/Healing/healing";
import DanceFooter from "./Partials/Dance/danceFooter";
import StudioServices from "./Dance/studioServices";
import DanceContact from "./Dance/danceContact";
import HealingAbout from "./Healing/about";
import Booking from "./Healing/booking";
import HealingFooter from "./Partials/Healing/healingFooter";
import NewClient from "./Healing/newClient";
import Cancel_or_Rebook from "./Healing/cancelRebook";
import ILMContact from "./Healing/contact";
import FAQ from "./Healing/faq";
import Teaching from "./Dance/teaching";
import Film from "./Dance/film";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* <Route path="/dance" element={<DanceApp />} >  */}
          <Route path="/dance" element={<><DanceMenu /> <About /> <DanceFooter /></>} />
          <Route path="/dance/about" element={<><DanceMenu /> <About /> <DanceFooter /></>} />
          <Route path="/dance/studio-services" element={<><DanceMenu /> <StudioServices /> <DanceFooter /></>} />
          <Route path="/dance/teaching" element={<><DanceMenu /> <Teaching /> <DanceFooter /></>} />
          <Route path="/dance/film" element={<><DanceMenu /> <Film /> <DanceFooter /></>} />
          <Route path="/dance/contact" element={<><DanceMenu /> <DanceContact /> <DanceFooter /></>} />
        {/* </Route> */}
        <Route path="/healing" element={<HealingApp />} />
        <Route path="/healing/about" element={<><HealingMenu /> <HealingAbout /> <HealingFooter /></>} />
        <Route path="/healing/booking/new-client" element={<><HealingMenu /> <NewClient /> <HealingFooter /></>} />
        <Route path="/healing/booking/cancel-or-rebook" element={<><HealingMenu /> <Cancel_or_Rebook /> <HealingFooter /></>} />
        <Route path="/healing/booking" element={<><HealingMenu /> <Booking /> <HealingFooter /></>} />
        <Route path="/healing/contact" element={<><HealingMenu /> <ILMContact /> <HealingFooter /></>} />
        <Route path="/healing/FAQ" element={<><HealingMenu /> <FAQ /> <HealingFooter /></>} />
      </Routes>
    </Router>
  );
}

export default App;
