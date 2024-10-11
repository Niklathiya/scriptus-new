import React from 'react'
import "./herosection.css"

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="custom-container">
        <div className="hero-section-detail">
          <div>
            <h1 className='font-color-dark'>
              Exclusive Deals of <br /> Furniture Collection
            </h1>
            <p className="hero-tag-line font-color-dark">
              Explore different categories. Find the best deals.
            </p>
            <button className="hero-button">
                <span>Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection