import React from "react";

const VisualLook = () => {
  return (
    <section className="promotion-section">
      <div>
        <video
          className="promotion"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls
          type="video/mp4"
          poster="https://bit.ly/3Kp1a2D"
        >
          <source src="https://bit.ly/3sSWUCN" />
        </video>
      </div>
    </section>
  );
};

export default VisualLook;
