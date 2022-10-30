import LandingPage from "./Pages/Landing-Page/landing-page.component";
import AboutUs from "./Pages/AboutUs-Page/aboutus.component";
import Glimpses from "./Pages/Glimpses-Page/glimpses.component";
import EventPage from "./Pages/Event-Page/eventpage.component";
import SchedulePage from "./Pages/Schedule-Page/schedule-page.component";

const App = () =>{
  return (
    <div className="App">
      <LandingPage/>
      <AboutUs/>
      <Glimpses/>
      <EventPage/>
      <SchedulePage/>
    </div>
  );
}

export default App;
