import React from "react";
import Description from "./Description";

const PhotoCarousel = () => {
  return (
    <section className="description-section">
      <Description title="blue heron homes" />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="description_carousel--images carousel-item active">
            <img
              src="https://bit.ly/3hLgI4p"
              alt="Slide one"
              className="carousel-images d-block w-100 image-1"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3vZVN6j"
              alt="Slide two"
              className="carousel-images d-block w-100 image-2"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3pEzG1e"
              alt="Slide three"
              className="carousel-images d-block w-100 image-3"
            />
          </div>
          <div className="description_carousel--images carousel-item">
            <img
              src="https://bit.ly/3HPIuHH"
              alt="Slide four"
              className="carousel-images d-block w-100 image-4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
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

export default PhotoCarousel;
