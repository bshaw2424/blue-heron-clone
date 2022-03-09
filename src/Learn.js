import React from "react";

const Learn = ({ title, link1, link2, link3, link4, link5 }) => {
  return (
    <div>
      <h2 className="contact-title">{title}</h2>
      <a href="#" className="learn-link learn-link-1">
        {link1}
      </a>
      <a href="#" className="learn-link learn-link-2">
        {link2}
      </a>
      <a href="#" className="learn-link learn-link-3">
        {link3}
      </a>
      <a href="#" className="learn-link learn-link-4">
        {link4}
      </a>
      <a href="#" className="learn-link learn-link-5">
        {link5}
      </a>
    </div>
  );
};

export default Learn;
