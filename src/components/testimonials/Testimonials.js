import React from "react";
import Slider from "react-slick";
import "./testimonials.css"
import * as IMAGE from "../../image"

const Testimonials = () => {
    const testimonialsdata = [
        {
            review: "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.",
            name: "Leona Paul",
            position: "CEO of Floatoom"
        },
        {
            review: "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.",
            name: "Leona Paul 1",
            position: "CEO of Floatoom"
        },
        {
            review: "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.",
            name: "Leona Paul 2",
            position: "CEO of Floatoom"
        },
    ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonial-wrapper">
      <div className="custom-container">
        <h2 className="font-color-dark res-heading">Testimonials</h2>
        <p className="testimonial-description font-color-dark">Over 1500 happy customers.</p>
        <div className="scr-slider testimonial-slider">
            <Slider {...settings}>
                {testimonialsdata.map((slide, index) => (
                <div key={index}>
                    <div className="testimonial-content">
                        <div className="testimonial-profile"></div>
                        <div className="testimonial-profile-details">
                            <p className="testimonial-review font-color-dark">"{slide.review}"</p>
                            <div>
                                <p className="font-color-dark testimonial-name">{slide.name}</p>
                                <p className="font-color-dark">{slide.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
        <div className="testimonial-see-all">
            <a className="font-color-dark">See all review</a>
            <img src={IMAGE.Rightarrow} alt="view" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;    