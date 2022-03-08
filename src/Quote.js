import React from "react";
import QuoteSlideOne from "./QuoteSlideOne";
import QuoteSlideTwo from "./QuoteSlideTwo";
import QuoteSlideThree from "./QuoteSlideThree";
import QuoteSlideFour from "./QuoteSlideFour";

const Quote = () => {
  return (
    <section className="quote-section">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <QuoteSlideOne
            slideTitle="the blue heron process"
            name="eileen moore"
            quote="   Designing our Blue Heron Home was an enjoyable process – from the
        selections to the build, everything was top quality, including the base
        options. We’re blown away by the overall beauty of the Home, truly
        modern desert elegance."
          />
          <QuoteSlideTwo
            slideTitle="functional design"
            name="howard unger"
            quote="The livability of the finished product exceeded our wildest dreams. It
        is truly incredible the way such an eye pleasing home can also be
        amazingly functional."
          />
          <QuoteSlideThree
            slideTitle="intentional design"
            name="farhan naqvi"
            quote="Forward-thinking. Thoughtful. Simply stunning. These are the words that
        come to mind when thinking about our Blue Heron Home. I couldn’t be more
        proud of the home that Tyler and his team created for my family."
          />
          <QuoteSlideFour
            slideTitle="where life becomes living"
            name="Chris Emanuel"
            quote=" When the warm evenings arrive, we love to open up [our Blue Heron Home].
        We have dinner on our rooftop deck during sunset when The Strip lights
        begin to illuminate the sky."
          />
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Quote;
