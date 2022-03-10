import React from "react";

const PhoneContact = ({ title, phone }) => {
  return (
    <div>
      <h2 className="contact-title">{title}</h2>
      <span className="phone">Call Us: {phone}</span>
    </div>
  );
};

export default PhoneContact;
