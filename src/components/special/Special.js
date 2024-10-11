import React from "react";
import "./special.css";
import * as IMAGE from "../../image";
import Slider from "react-slick";

const Special = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true, 
  };

  const specialdata = [
    {
      title: "Living Room Family Set",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$229.99",
    },
    {
      title: "Living Room Special Set",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$329.99",
    },
    {
      title: "Living Room Family Set",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$587.99",
    },
  ];

  return (
    <section className="special-wrapper">
      <div className="custom-container">
        <h2 className="font-color-dark res-heading">Special Package</h2>
        <div className="special-container">
          <div className="special-package-box">
            <div className="special-package-image-box"></div>
            <div className="special-package-image-des">
              <div>
                <p className="font-color-dark special-package-image-name">
                  Larkin Wood Full Set
                </p>
                <img src={IMAGE.Star} alt="rating" />
                <p className="font-color-dark special-package-image-price">
                  $729.99
                </p>
              </div>
              <button className="hero-button">
                <p>Add to cart</p>
                <img src={IMAGE.Addcart} alt="add to cart" />
              </button>
            </div>
          </div>

          <div className="other-package">
            <p className="other-package-description-heading font-color-dark">
              Description
            </p>
            <p className="font-color-dark">
              Cast Aluminum Outdoor Chaise Lounge As an elegant and classic
              touch to your outdoor space, this cast Aluminum Chaise Lounge
              combines the appearance, function and quality all together,
              offering you with the best experience.
            </p>

            <div className="other-package-see">
              <p>See More</p>
              <img src={IMAGE.Downarrow} alt="see more" />
            </div>

            <div className="scr-slder scr-verticle-slider special-slider">
              <Slider {...settings}>
                {specialdata.map((special, index) => (
                  <div key={index} className="other-package-slider">
                    <div className="other-package-image-box"></div>
                    <div className="other-package-description-box">
                      <div className="other-package-slider-titlebox">
                        <p className="font-color-dark">{special.title}</p>
                        <p className="font-color-dark">{special.price}</p>
                      </div>
                      <img src={IMAGE.Star} alt="review" />
                      <p className="special-des font-color-dark">
                        {special.description}
                      </p>
                      <div className="other-package-see">
                        <p className="font-color-dark">See More</p>
                        <img src={IMAGE.Downarrow} alt="see more" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
