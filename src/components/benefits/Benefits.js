import React from 'react'
import "./benefits.css"
import * as IMAGE from "../../image"

const Benefits = () => {
    const benefitdata = [
        {
            benefit_image: IMAGE.Payment,
            benefir_heading: "Payment Method",
            benefit_detail: "We offer flexible payment options, to make easier."
        },
        {
            benefit_image: IMAGE.Return,
            benefir_heading: "Return policy",
            benefit_detail: "You can return a product within 30 days."
        },
        {
            benefit_image: IMAGE.Contact,
            benefir_heading: "Customer Support",
            benefit_detail: "Our customer support is 24/7."
        },
    ]

  return (
    <section className='benefit-wrapper'>
      <div className='custom-contaner'>
        <h2 className='font-color-dark'>Benefits for your expediency</h2>
        <div className='benefit-badge-container'>
            {benefitdata.map((benefit, index) => {
                return (
                    <>
                        <div key={index} className='benefit-badge-box'>
                            <div className={`benefit-image-wrapper color-${index}`}>
                                <div className='benefit-image-box'>
                                    <img src={benefit.benefit_image} alt={benefit.benefir_heading}/>
                                </div>
                            </div>
                            <h3 className='font-color-dark'>{benefit.benefir_heading}</h3>
                            <p className='font-color-dark'>{benefit.benefit_detail}</p>
                        </div>
                    </>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Benefits