import React from 'react'
import "./join.css"

const Join = () => {
  return (
    <section className='join-container'>
      <div className='join-image'></div>
      <div className='join-detail font-color-dark'>
        <h2>Join Our 
        <span> Newsletter</span></h2>
        <p className='font-color-dark'>Receive exclusive deals, discounts and many offers.</p>
        <form>
            <div>
                <input placeholder='Enter Your Email' type='email'/>
            </div>
            <button className='hero-button join-button'>
                <span>Subscribe</span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Join