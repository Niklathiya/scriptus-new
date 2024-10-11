import React from "react";
import "./popular.css";
import * as IMAGE from "../../image";
import Slider from "react-slick";

const Popular = () => {
  const populardata = [
    {
      popular_image: IMAGE.Armchair,
      popular_name: "Armchair",
      popular_description: "Light single chair",
      popular_price: "$145",
    },
    {
      popular_image: IMAGE.Sofa,
      popular_name: "Premium Sofa",
      popular_description: "Light single chair",
      popular_price: "$145",
    },
    {
      popular_image: IMAGE.Minimal,
      popular_name: "Minimal Sofa",
      popular_description: "Light single chair",
      popular_price: "$145",
    },
    {
      popular_image: IMAGE.Dining,
      popular_name: "Dining Chair",
      popular_description: "Light single chair",
      popular_price: "$145",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
  };

  return (
    <section className="popular-wrapper">
      <h2 className="font-color-dark res-heading">Popular Products</h2>
      <div className="popular-slider scr-slider">
        <Slider {...settings}>
          {populardata.map((product, index) => (
            <div
              key={index.id}
              className={`product-slide product-color-${index}`}
            >
              <div className="product-slider-container">
                <div className="popular-product-image-box">
                  <img src={product.popular_image} alt={product.popular_name} />
                </div>
                <div className="hi">
                  <p className="font-color popular-name">
                    {product.popular_name}
                  </p>
                  <p className="font-color">{product.popular_description}</p>
                  <p className="font-color popular-name">
                    {product.popular_price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="popular-btn">
        <button className="hero-button">
            <a className="">See all review</a>
            <img src={IMAGE.Rightarrow} alt="view" />
        </button>
      </div>
    </section>
  );
};

export default Popular;
