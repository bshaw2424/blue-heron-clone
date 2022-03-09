import React from "react";

const QuoteSlideOne = () => {
  return (
    <div className="quote-slide quote-slide-1 carousel-item active">
      <div className="slide-container">
        <div>
          <span className="slide-title">the blue heron process</span>
          <p>
            Designing our Blue Heron Home was an enjoyable process – from the
            selections to the build, everything was top quality, including the
            base options. We’re blown away by the overall beauty of the Home,
            truly modern desert elegance.
          </p>
          <div className="brand-information">
            <img src="https://bit.ly/3sPotwB" className="brand-image" alt="" />
            <span>eileen moore</span>
          </div>
        </div>
        <img
          src="https://bit.ly/3hLgI4p"
          alt="Slide one"
          className="d-block w-100 image-1"
        />
      </div>
    </div>
  );
};

export default QuoteSlideOne;
