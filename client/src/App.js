import LandingPage from "./Pages/Landing-Page/landing-page.component";
import AboutUs from "./Pages/AboutUs-Page/aboutus.component";
import Glimpses from "./Pages/Glimpses-Page/glimpses.component";

const App = () =>{
  return (
    <div className="App">
      <LandingPage/>
      <AboutUs/>
      <Glimpses/>
    </div>
  );
}

export default App;
