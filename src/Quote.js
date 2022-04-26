import React from "react";
import QuoteSlideOne from "./QuoteSlideOne";
import QuoteSlideTwo from "./QuoteSlideTwo";
import QuoteSlideThree from "./QuoteSlideThree";
import QuoteSlideFour from "./QuoteSlideFour";

const Quote = () => {
  return (
    <section className="quote-section">
      <div
        id="carouselControllers"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <QuoteSlideOne />
          <QuoteSlideTwo />
          <QuoteSlideThree />
          <QuoteSlideFour />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControllers"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon black"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControllers"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Quote;
