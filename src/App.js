import "./App.css";
import Hero from "./Hero";
import PhotoCarousel from "./PhotoCarousel";
import Discovery from "./Discovery";
import AboutUs from "./AboutUs";
import AboutNumbers from "./AboutNumbers";
import VisualLook from "./VisualLook";
import Quote from "./Quote";
import Links from "./Links";

function App() {
  return (
    <div>
      <Hero />
      <PhotoCarousel />
      <Discovery />
      <AboutUs title="who is blue heron?" />
      <AboutNumbers />
      <VisualLook />
      <Quote />
      <Links />
    </div>
  );
}

export default App;
