import React from 'react'
import "./special.css"
import * as IMAGE from "../../image"

const Special = () => {
  return (
    <section className='special-wrapper'>
      <div className='custom-container'>
        <h2 className="font-color-dark res-heading">Special Package</h2>
        <div className='special-container'>
            <div className='special-package-box'>
                <div className='special-package-image-box'></div>
                <div className='special-package-image-des'>
                    <div>
                        <p className='font-color-dark special-package-image-name'>Larkin Wood Full Set</p>
                        <img src={IMAGE.Star} alt='rating' />
                        <p className='font-color-dark special-package-image-price'>$729.99</p>
                    </div>
                    <button className='hero-button'>
                        <p>Add to cart</p>
                        <img src={IMAGE.Addcart} alt='add to cart' />
                    </button>
                </div>
            </div>

            <div className='other-package'>
                <p className='other-package-description-heading font-color-dark'>Description</p>
                <p className='font-color-dark'>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.</p>

                <div className='other-package-see'>
                    <p>See More</p>
                    <img src={IMAGE.Downarrow} alt='see more' />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Special
