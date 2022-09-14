import React from 'react'
import './DigitalApplication.css';
// import tech from '../../assets/images/tech.JPG'
import tech from '../../assets/images/vi.png'
import digital1 from '../../assets/images/digital1.jpg'
import digital2 from '../../assets/images/digital2.png'
import { Player } from 'video-react';


function DigitalApplication() {
    return (
        <div className='no_highlights'>
            <img src={tech} alt="" className='highImage' height={600} />
            <div className="container">
                <div className="heading bottom-space text-center mt-5">
                    <h2>Welcome to the XR world</h2>
                </div>

                <div className="row rowStyle">
                    <div className="col-6">
                        <img src={digital1} alt=""
                            className='imageDigital wow fadeInRight'
                            data-wow-duration="1s"
                            style={{ marginTop: '30%' }}
                        />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>XR apps</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'>Nowadays, everything is digitalized and everything is evolving.  XR technologies have applications in almost every industry, such as architecture, automotive industry, sports training, real estate, mental health, medicine, health care, retail, space travel, design, engineering, interior design, television and film, media, advertising, marketing, libraries, education, news, music, and travel. Thanks to our cross reality apps, in both Android and iOS devices, we can make your reality as well as virtual a better place. </p>
                        </div>
                    </div>
                </div>
                <div className="row rowStyle">
                    <div className="col-6">
                        <img src={digital2} alt=""
                            className='imageDigital wow fadeInRight'
                            data-wow-duration="1s"
                        />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>Augmented reality (AR)</h2>
                            <h4>Stay on the ball! Stay current!</h4>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'> We work with the latest technologies to give you a better experience.  So if you need to revive the history, make the reality funnier or explore the future, order our augmented reality solutions. </p>
                        </div>
                    </div>
                </div>
                <div className="row rowStyle">
                    <div className="col-6">
                        <Player>
                        <source src="https://www.youtube.com/watch?v=gWiHTyhrcLI&ab_channel=FeridKamel" />
                        </Player>
                        {/* <video controls="true" autoPlay>
                            <source src="https://www.youtube.com/watch?v=gWiHTyhrcLI&ab_channel=FeridKamel" type="video/mp4"/>
                        </video> */}
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center ">
                            <h2>Magic Eye Application</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p>Project: From a static museum of illusions to a dynamic one</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DigitalApplication