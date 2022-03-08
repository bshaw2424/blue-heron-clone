import React from "react";

const QuoteSlideThree = ({ slideTitle, name, quote }) => {
  return (
    <div class="carousel-item">
      <span>{slideTitle}</span>
      <p>{quote}</p>
      <div>
        <span>
          <img
            src="https://blueheron.com/wp-content/uploads/2020/12/Icon-Full-Color-RGB-BH-Logo-Branding-150x154.png"
            alt="Farhan Naqvi"
          />
        </span>

        <span>{name}</span>
      </div>
      <img
        class="d-block w-100"
        src="https://bit.ly/37c9eWi"
        alt="Third slide"
      />
    </div>
  );
};

export default QuoteSlideThree;
