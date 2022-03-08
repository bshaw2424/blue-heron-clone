import React from "react";

const QuoteSlideFour = ({ slideTitle, name, quote }) => {
  return (
    <div class="carousel-item">
      <span>{slideTitle}</span>
      <p>{quote}</p>{" "}
      <div>
        <span>{name}</span>
        <img
          className="brand"
          src="https://bit.ly/3ClPhHS"
          alt="Chris Emanuel"
        />
      </div>
      <div>
        <span>
          <img
            class="d-block w-100"
            src="https://bit.ly/35wVFAp"
            alt="Fourth slide"
          />
        </span>
      </div>
    </div>
  );
};

export default QuoteSlideFour;
