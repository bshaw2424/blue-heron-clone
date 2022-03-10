import React, { useState } from "react";

const Discovery = () => {
  return (
    <section className="discovery-section">
      <div className="discovery-container">
        <ul className="discovery-properties">
          <li className="d-properties d-properties-1">
            <img src="https://bit.ly/3Kr2KBe" alt="" />
            <a className="image-overlay" href="">
              <div>
                <h2>bh elite</h2>
                <span>Create a fully-custom Home from your visison.</span>
              </div>
            </a>
          </li>
          <li className="d-properties d-properties-2">
            <img src="https://bit.ly/3hJiUtr" alt="" />
            <a className="image-overlay" href="">
              <div>
                <h2>bh nexus</h2>
                <span>Communities designed for your vision.</span>
              </div>
            </a>
          </li>
          <li className="d-properties d-properties-3">
            <img src="https://bit.ly/3vRnqhA" alt="" />
            <a className="image-overlay" href="">
              <div>
                <h2>move-in ready</h2>
                <span>Explore Homes that are ready for you.</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Discovery;
