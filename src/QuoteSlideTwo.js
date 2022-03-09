import React from "react";

const QuoteSlideTwo = () => {
  return (
    <div className="quote-slide quote-slide-2 carousel-item">
      <div className="slide-container">
        <div>
          <span className="slide-title">functional design</span>
          <p>
            The livability of the finished product exceeded our wildest dreams.
            It is truly incredible the way such an eye pleasing home can also be
            amazingly functional.
          </p>
          <div className="brand-information">
            <img src="https://bit.ly/3sPotwB" className="brand-image" alt="" />
            <span>howard unger</span>
          </div>
        </div>
        <img
          src="https://bit.ly/3i7mm1f"
          alt="Slide two"
          className="d-block w-100 image-2"
        />
      </div>
    </div>
  );
};

export default QuoteSlideTwo;
