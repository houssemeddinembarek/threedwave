import React from 'react'
import './Industrial.css'
import image1 from '../../assets/images/image1_3dwave.png'
import image2 from '../../assets/images/image2_3dwave.png'
import image3 from '../../assets/images/image3_3dwave.png'
import image4 from '../../assets/images/image4_3dwave.jpg'
import image5 from '../../assets/images/image5_3dwave.png'
import image6 from '../../assets/images/image6_3dwave.jpg'
import image7 from '../../assets/images/image7_3dwave.jpg'
import image8 from '../../assets/images/image8_3dwave.jpg'
import image9 from '../../assets/images/image9.jpg'
import industrual from '../../assets/images/industrial.png';

function Industrial() {
    return (
        <div className='no_highlights'>
            <img src={industrual} alt="" className='highImageIndustrial' height={600} />

            <section className="content-block">
                <div className="container">
                    <div className="demo-wrapper">
                        {/* <h3 className="text-center element-heading">Default</h3> */}
                        <div className="description text-center">
                            <p className='firstText'>
                                From an idea to a working part there is a long path of design, analysis, tests till manufacturing. We at 3D wave provide our services to be your partner in this journey, powered by our experience and accomplished projects we are fully confident that we can support your effort in any of the following domains.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">


                <div className="row rowStyle">
                    <div className="col-6 wow fadeInRight">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>3D scan</h2>
                        </div>
                        <div className="description text-center " data-wow-duration="1s">
                            <p className='text'>It’s transforming a physical part to a cloud of points. We are capable to scan variety of parts with precision that could reach about 50 um of precision. This service could be accompanied by a dimensional control, this way any feature could be measured with great precision.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={image1} alt="" className='industrialImage1 wow fadeInLeft' data-wow-duration="1s" />
                    </div>
                </div>

                <div className="row rowStyle">
                    <div className="col-6">
                        <img src={image2} alt="" className='industrialImage1 pt-4 wow fadeInRight' data-wow-duration="1s" />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>Design</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'>Modeling a part or an assembly from an idea or a sketch could look like a straight forward task, but the real deal is to make it producible and functional with the lowest possible price and material. In other word Design for manufacturing including Finite element analysis, weight optimization, production drawings and cost projection.</p>
                        </div>
                    </div>
                </div>

                <div className="row rowStyle">
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>Reverse engineering</h2>
                        </div>
                        <div className="description text-center wow fadeInRight" data-wow-duration="1s">
                            <p className='text'>Reverse engineering is one of the most challenging domains in engineering, yet it’s exciting for us to be able to give our partners the ability to reproduce their parts throught generate manufacturing drawings , usable CAD file or even a physical additive manufactured part.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={image3} alt="" className='industrialImage1 wow fadeInLeft' data-wow-duration="1s" />
                    </div>
                </div>

                <div className="row rowStyle">
                    <div className="col-6">
                        <img src={image4} alt="" className='industrialImage1 wow fadeInRight' data-wow-duration="1s" />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>Additive manufacturing</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'>3D printing is an advanced technology. It provides precision and reduced lead time. Essentially this technology is a trump card when complexe geometry is needed, usually this geometry is almost impossible with any other manufacturing process. either in plastic or metallic our customers have a wide range of materials to fulfill their needs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row image5Style">
                <img src={image5} alt="" className="wow fadeIn" data-wow-duration="3s" />
            </div>

            <div className="heading bottom-space text-center mt-5">
                <h2>EXECUTED PROJECTS</h2>
            </div>

            <div className="row rowStyle">
                <div className="col-6 wow fadeInRight">
                    <div className="heading bottom-space text-center mt-5">
                        <h2>Helicopter Fuel Valve 3D printed Replacement valve</h2>
                    </div>
                </div>
                <div className="col-6">
                    <img src={image6} alt="" className='industrialImage1 wow fadeInLeft' data-wow-duration="1s" />
                </div>
            </div>

            <div className="row ">
                <div className="col-6 wow fadeInRight">
                    <div className="heading bottom-space liste ml-5">
                        <ul>
                            <h4><li style={{ fontWeight: 'bold' }}>Original valve was made from a steel casting.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>Obsolescence issue made it impossible to get spare valves.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>Helicopter owner turned to 3D Wave USA to provide a solution.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>The original part was 3D-modeled from original design data.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>A plastic prototype was 3D-printed to validate CAD geometry and manufacturing approach.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>End-use part was manufactured from 17-4 SS powder using EOS M290 laser sintering machine.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>The printed valve was CT-scanned for internal cavities and was deemed acceptable after some final finishes.</li></h4>
                            <h4><li style={{ fontWeight: 'bold' }}>The 3D-printed part was more efficient due to integrated fuel flow paths which the additive manufacturing technology made possible.</li></h4>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <img src={image7} alt="" className='industrialI wow fadeInLeft' data-wow-duration="1s" />
                </div>
            </div>


            <div className="row">
                <div className="col-6">
                    <img src={image8} alt="" className='industrialII wow fadeInLeft mt-3' data-wow-duration="1s" />
                </div>
                <div className="col-6 wow fadeInRight" >
                    <div className="heading bottom-space mt-5 ml-5" >
                        <h2>Helicopter Fuel Valves 3D Printed 17-4 Stainless Steel</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Industrial