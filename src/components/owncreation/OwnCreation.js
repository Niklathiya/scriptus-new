import React from "react";
import "./owncreation.css";
import Slider from "react-slick";

const OwnCreation = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]
  };

  const slides = [
    { id: 1, silde_title: "Explore All Rooms" },
    { id: 2, silde_title: "Explore Living Room" },
    { id: 3, silde_title: "Explore Kitchen" },
    { id: 4, silde_title: "Explore Bedroom" },
    { id: 5, silde_title: "Explore Balcony" },
  ];

  return (
    <section className="own-creation-wrapper">
      <div className="primary-color own-creation-detail">
        <div>
          <h2>
            Our <br /> Own Creation
          </h2>
          <p>Designed in our studio</p>
          <div>
            <a>More</a>
          </div>
        </div>
      </div>

      <div className="own-creation-slider scr-slider">
        <Slider {...settings}>
            {slides.map((slide, index) => (
            <div key={index.id} className="own-slide" >
                <h3>{slide.content}</h3>
                <div className="own-creation-slider-detail-box">
                    <p>{slide.silde_title}</p>
                </div>
            </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default OwnCreation;