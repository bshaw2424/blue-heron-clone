import "./App.css";
import Navigation from "./Navigation";
import Hero from "./Hero";
import PhotoCarousel from "./PhotoCarousel";
import Discovery from "./Discovery";
import AboutUs from "./AboutUs";
import AboutNumbers from "./AboutNumbers";
import VisualLook from "./VisualLook";
import Quote from "./Quote";
import Links from "./Links";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <PhotoCarousel />
      <Discovery />
      <AboutUs title="who is blue heron?" />
      <AboutNumbers />
      <VisualLook />
      <Quote />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
