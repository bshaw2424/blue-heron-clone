import React from "react";

const Links = () => {
  return (
    <section className="community-link-section">
      <ul className="link-container">
        <li className="community-link community-link-1">
          <a href="/">
            <span className="link-icon">
              <img src="https://bit.ly/3vRmVnN" alt="" />
            </span>
            <span className="link-title">bh elite</span>
          </a>
        </li>
        <li className="community-link community-link-2">
          <a href="/">
            <span className="link-icon">
              <img src="https://bit.ly/361y6j1" alt="" />
            </span>
            <span className="link-title">bh nexus</span>
          </a>
        </li>
        <li className="community-link community-link-3">
          <a href="/">
            <span className="link-icon">
              <img src="https://bit.ly/36173V0" alt="" />
            </span>
            <span className="link-title">quick delivery</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Links;
