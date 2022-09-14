import React from 'react';
import './OurServices.css'
import Carousel from 'react-bootstrap/Carousel';
import imgM1 from '../../assets/images/image_medicale.jpg';
import imgM2 from '../../assets/images/image-medic2.png';
import imgM3 from '../../assets/images/image_medic3.jpg';
import imgM4 from '../../assets/images/img4.jpg';
import imgM5 from '../../assets/images/img5.jpg';
import jambe from '../../assets/images/jambe.png';
// import scanningHeadImage from '../../assets/images/scanning3D.jpg';
import scanningHeadImage from '../../assets/images/scanning3d2.jpg';

function OurServices() {

    return (
        <div className='no_highlights'>
            <img src={scanningHeadImage} alt="" style={{height:600 , width:'100%'}}/>
            {/* <section className="visual">
                <div className="visual-inner portfolio-banner-v2 black-overlay-4 parallax" data-stellar-background-ratio="0.55">
                    <div className="centered">
                        <div className="container">
                            <div className="visual-text visual-center">
                                <h1 className="visual-title visual-sub-title text-white">3D SCANNING</h1>
                                <div className="breadcrumb-block">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Protfolio</a></li>
                                        <li className="breadcrumb-item active">Full Width</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="content-block">
                <div className="container">
                    <div className="demo-wrapper">
                        {/* <h3 className="text-center element-heading">Default</h3> */}
                        <div className="description text-center">
                            <h1>We work with passion!</h1>
                            <p className='firstText'>
                                With an experience of more than 7 years in the aerospace industry, 3D wave offers a wide range of services for the industry. Ranging from 3D scanning, dimensional control to 3D printing of prototypes and small series. 3D wave also offers for industrial customized augmented reality applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <div className="row rowStyle">
                <div className="col-5">
                    <img src={jambe} alt=""
                        className='imageDigital wow fadeInRight'
                        data-wow-duration="1s"
                        style={{ marginLeft: '60%' }}
                    />
                </div>
                <div className="col-6">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>Medical</h2>
                    </div>
                    <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                        <p className='text'>3D wave is developing, side by side with specialized doctors,a series of 3D printed orthesis. Our medical products are in an advanced phase of tests and we hope that in a short period of time they will be available for a large portion of patients who are in need to this kind of innovative products. </p>
                    </div>
                </div>
            </div>
            <div className="row rowStyle">
                <div className="col-5 d-flex justify-content-end">
                    <img src={imgM4} alt=""
                        className='imageDigital wow fadeInRight'
                        data-wow-duration="1s"
                        style={{ width: '70%' }}
                    />
                </div>
                <div className="col-7">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>Industrial Pack</h2>
                    </div>
                    <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                        <p className='text'>
                            From an idea to a working part there is a long path of design, analysis, tests till manufacturing. We at 3D wave provide our services to be your partner in this journey, powered by our experience and ambition we are fully confident that we can finish any of these tasks.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row rowStyle">
                <div className="col-5 d-flex justify-content-end">
                    <img src={imgM2} alt=""
                        className='imageDigital wow fadeInRight'
                        data-wow-duration="1s"
                    />
                </div>
                <div className="col-7">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>Cultural Pack</h2>
                    </div>
                    <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                        <p className='text'>
                            There is no doubt that the use of smart phones and the applications industry are developing, that’s why at 3D Wave we use innovative technologies to reach most areas (medical, hotel, …)
                        </p>
                    </div>
                </div>
            </div>
            <div className="row rowStyle">
                <div className="col-5 d-flex justify-content-end">
                    <img src={imgM5} alt=""
                        className='imageDigital wow fadeInRight'
                        data-wow-duration="1s"
                        style={{width:'70%'}}
                    />
                </div>
                <div className="col-7">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>Others</h2>
                    </div>
                    <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                        <p className='text'>
                            There is no doubt that the use of smart phones and the applications industry are developing, that’s why at 3D Wave we use innovative technologies to reach most areas (medical, hotel, …)                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OurServices