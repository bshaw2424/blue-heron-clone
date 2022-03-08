import React from "react";

const Description = ({ title }) => {
  return (
    <section className="description-section">
      <div className="description-container">
        <h2>{title}</h2>
        <div className="description description-1">
          Blue Heron is a design-led development firm that accentuates
          aspirational living through personalized Home experiences.
        </div>
        <div className="description description-2">
          Blue Heron Homes turn life into living. We design Homes that enhance
          the natural beauty of their surroundings while generating organic
          connections with its environment. Every BH house is an everlasting
          Home.
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="description_carousel--images carousel-item active">
            <img
              src="https://bit.ly/3hLgI4p"
              alt=""
              className="carousel-images d-block w-100 image-1"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3vZVN6j"
              alt=""
              className="carousel-images d-block w-100 image-2"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3pEzG1e"
              alt=""
              className="carousel-images d-block w-100 image-3"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3HPIuHH"
              alt=""
              className="carousel-images d-block w-100 image-4"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Description;
