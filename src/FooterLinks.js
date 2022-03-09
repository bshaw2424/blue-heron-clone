import React from "react";

const FooterLinks = ({ copyright, link1, link2, link3, linkButton }) => {
  return (
    <div className="container">
      <div className="info-links">
        <a href="#" className="footer-item footer-item-1">
          {copyright}
        </a>
        <a href="#" className="footer-item footer-item-2">
          {link1}
        </a>
        <a href="#" className="footer-item footer-item-3">
          {link2}
        </a>
        <a href="#" className="footer-item footer-item-4">
          {link3}
        </a>
      </div>
      <a href="#" className="footer-item  btn footer-button footer-item-5">
        {linkButton}
      </a>
    </div>
  );
};

export default FooterLinks;
