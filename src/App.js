import "./App.css";
import Hero from "./Hero";
import PhotoCarousel from "./PhotoCarousel";
import Discovery from "./Discovery";
import AboutUs from "./AboutUs";
import AboutNumbers from "./AboutNumbers";
import VisualLook from "./VisualLook";
import Quote from "./Quote";

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
    </div>
  );
}

export default App;
