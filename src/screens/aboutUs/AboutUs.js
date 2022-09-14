import React, { useState } from 'react'
import './AboutUs.css'
import about from '../../assets/images/about.jpg'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.png'

function AboutUs() {
    const [isMarkerShown, setIsMarkerShown] = useState(true)
    return (
        <div className='no_highlights'>
            <img src={about} alt="" className='highImageIndustrial' height={600} />
            <div className="row mb-5 mt-5">
                <div className="col-5">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>OUR WORLD</h2>
                    </div>
                    <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                        <p className='text'>3D WAVE is a start-up born in 2018, located in Sousse region, specialized in 3D printing, 3D scanning, virtual and augmented reality, composed of a young, dynamic and experienced team combining different skills, and due to this team our 3D WAVE start-up offers, beyond the quality of the 3D printers we offer, a great importance to the quality of the associated services. Wonderful digital things require a good mix of combined skills : With an experience of more than 7 years in the aerospace industry, 3D wave offers a wide range of services for the industry. Ranging from 3D scanning, dimensional control to 3D printing of prototypes and small series. 3D wave also offers for industrial customized augmented reality applications.</p>
                    </div>
                </div>
                <div className="col-7">
                    <img src={about1} alt="" className='about1Image wow fadeInUp' data-wow-duration="1s"/>
                    <img src={about2} alt="" className='about2Image wow fadeInUp' data-wow-duration="1s" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs