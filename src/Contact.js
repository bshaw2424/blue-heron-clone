import React from "react";
import PhoneContact from "./PhoneContact";
import Learn from "./Learn";
import Connect from "./Connect";
import Brand from "./Brand";

const Contact = () => {
  return (
    <section className="contact-section">
      <Brand />
      <PhoneContact title="contact" phone="123 456-7890" request="request" />
      <Learn
        title="learn more"
        link1="why blue heron"
        link2="portfolio"
        link3="bh furnishings"
        link4="careers"
        link5="meet our team"
      />
      <Connect
        title="connect"
        link1="facebook"
        link2="houzz"
        link3="instagram"
        link4="linkedin"
        link5="vimeo"
        link6="youtube"
      />
    </section>
  );
};

export default Contact;
