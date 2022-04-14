import React from "react";

const Description = ({ title }) => {
  return (
    <>
      <div className="description-container">
        <h2>{title}</h2>
        <div className="description description-1">
          Blue Heron is a design-led development firm that accentuates
          aspirational living through personalized Home experiences.
        </div>
        <div className="description description-2">
          Blue Heron Homes turn life into living. We design Homes that enhance
          the natural beauty of their surroundings while generating organic
          connections with its environment. Every BH house is an everlasting
          Home.
        </div>
      </div>
    </>
  );
};

export default Description;
