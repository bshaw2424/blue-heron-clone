import "./sass/App.scss";
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
    <main id="main-container">
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
    </main>
  );
}

export default App;
