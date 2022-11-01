import LandingPage from "./Pages/Landing-Page/landing-page.component";
import AboutUs from "./Pages/AboutUs-Page/aboutus.component";
import Glimpses from "./Pages/Glimpses-Page/glimpses.component";
import EventPage from "./Pages/Event-Page/eventpage.component";
import SchedulePage from "./Pages/Schedule-Page/schedule-page.component";
import FaqPage from "./Pages/FAQ-Page/faq.component";
import ContactUs from "./Pages/Contact-us/contactus.component";
import FormPage from "./Pages/Form-page/formpage.component";

import {Route, useHistory} from 'react-router-dom';
import { useEffect } from "react";

const App = () =>{

  const WebPage = () => (
    <div>
      <LandingPage/>
      <AboutUs/>
      <Glimpses/>
      <EventPage/>
      <SchedulePage/>
      <FaqPage/>
      <ContactUs/>
    </div>
  )

  return (
    <div className="App">
      <Route exact path = '/' component={WebPage}/>
      <Route exact path = '/register/:event' component={FormPage}/>
    </div>
  );
}

export default App;
