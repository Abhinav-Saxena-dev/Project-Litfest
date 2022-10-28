import LandingPage from "./Pages/Landing-Page/landing-page.component";
import AboutUs from "./Pages/AboutUs-Page/aboutus.component";
import Glimpses from "./Pages/Glimpses-Page/glimpses.component";
import EventPage from "./Pages/Event-Page/eventpage.component";

const App = () =>{
  return (
    <div className="App">
      <LandingPage/>
      <AboutUs/>
      <Glimpses/>
      <EventPage/>
    </div>
  );
}

export default App;
