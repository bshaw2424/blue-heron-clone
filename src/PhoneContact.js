import React from "react";

const PhoneContact = ({ title, request, phone }) => {
  return (
    <div>
      <h2 className="contact-title">{title}</h2>
      <span className="phone">Call Us: {phone}</span>
      <a className="request" href="#">
        {request}
      </a>
    </div>
  );
};

export default PhoneContact;
