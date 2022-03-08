import React from "react";

const AboutUs = ({ title }) => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="about-title">{title}</h1>
        <h2 className="about-secondary-title">
          Driven by imagination, designed by humanity, and developed by Las
          Vegas
        </h2>
        <div className="about-container">
          <p className="about-container_description about-description-1">
            Blue Heron was shaped by a family of curators that construct
            immaculate environments, shaped to sustain life. Founded by Tyler
            Jones, innovation and creativity shape our visionary approach to
            Home design.
          </p>
          <p className="about-container_description about-description-2">
            Blue Heron Homes are an experience that unfold in layers, speaking
            to you in a personal way to create a connection that results in a
            daily sense of well-being. We design and develop Homes that
            harmonize with the way you live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
