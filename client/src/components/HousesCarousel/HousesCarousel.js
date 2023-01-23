import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PhotoOne from "../../assets/img/Photo_1.jpg";
import PhotoTwo from "../../assets/img/photo_2.jpeg";
import PhotoThree from "../../assets/img/photo_3.jpeg";
import "./HousesCarousel.css";

class HousesCarousel extends Component {
  render() {
    return (
      <Carousel
        centerMode
        autoPlay
        infiniteLoop
        interval={7500}
        centerSlidePercentage={100}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <h2 className="carousel-title m-1">Dedication</h2>
          <p className="carousel-descp border-bottom border-1 border-top p-2">
            Our team is dedicated to finding you a house that feels like home
            sweet home. Your interests are our interests, our sweet agent will
            guide you along every step of the way
          </p>
          <img
            src={PhotoOne}
            alt="First slide"
            className="border-top border-bottom border-dark border-2 rounded mb-2"
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div>
          <h2 className="carousel-title m-1">Knowledge</h2>
          <p className="carousel-descp border-bottom border-1 border-top p-2">
            We are known Experts in the field! Our agents are more than
            qualified to answer all your questions and ensure that you have the
            right information before moving into your Sweet Home
          </p>
          <img
            src={PhotoTwo}
            alt="First slide"
            className="border-top border-bottom border-dark border-2 rounded mb-2"
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div>
          <h2 className="carousel-title m-1">Integrity</h2>
          <p className="carousel-descp border-bottom border-1 border-top p-2">
            Integrity means commiting to a high standard of service quality,
            understanding the needs of our customers and following through with
            their inquiries. At Sweet Home Realtor, your home sweet home ideals
            are our ideals as well.
          </p>
          <img
            src={PhotoThree}
            alt="First slide"
            className="border-top border-bottom border-dark border-2 rounded mb-2"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </Carousel>
    );
  }
}
export default HousesCarousel;
