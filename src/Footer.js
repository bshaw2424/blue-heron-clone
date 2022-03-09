import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <section className="footer">
      <FooterLinks
        copyright="&#169; blue heron 2022"
        link1="privacy"
        link2="terms of use"
        link3="website designed by noble studios"
        linkButton="get email updates"
      />
    </section>
  );
};

export default Footer;
