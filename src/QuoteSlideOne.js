import React from "react";

const QuoteSlideOne = ({ slideTitle, name, quote }) => {
  return (
    <div class="carousel-item active">
      <span className="slide-title">{slideTitle}</span>
      <p>{quote}</p>
      <div>
        <span>
          <img
            src="https://blueheron.com/wp-content/uploads/2020/12/Icon-Full-Color-RGB-BH-Logo-Branding-150x154.png"
            alt="Eileen Moore"
          />
        </span>
        <span>{name}</span>
      </div>
      <img
        class="d-block w-100"
        src="https://bit.ly/361ra56"
        alt="First slide"
      />
    </div>
  );
};

export default QuoteSlideOne;
