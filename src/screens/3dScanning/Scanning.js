import React from 'react';
import './Scanning.css';
// import scanner from '../../assets/images/scanner.jpg';
import scanner from '../../assets/images/scanning_3dwave.png';
import scanning1 from '../../assets/images/scanning1.jpg';
import scanning2 from '../../assets/images/scanning2.jpg';

function Scanning() {

    return (
        <div className='no_highlights'>
            <img src={scanner} alt="" className='highImageIndustrial' height={600} />
            <div className="ml-4 mr-4 mt-4">
                <div className="row rowStyle">
                    <div className="col-6">
                        <img src={scanning2} alt=""
                            className='imageDigital wow fadeInRight'
                            data-wow-duration="1s"
                            style={{ marginTop: '10%', height: '80%' }}
                        />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>What is 3D scanning ?</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'>3D scanning is a process of analyzing an object from the real world, to collect all the data in order to recreate its shape and appearance, digitally. </p>
                            <p className='text'>3D scanners are used for creating lifelike images and animation in movies and video games. Other applications of 3D scanning include reverse engineering, prototyping, architectural and industrial modeling, medical imaging and medical device modeling. </p>
                            <p style={{ fontWeight: 'bold' }}>Handled and fixed Scan :Big Volum scan (40 m2)</p>
                            <p className='text'>With professional scanning equipment, 3Dwave provides , 3D scanning services and high-quality 3D data to escort your path to innovation. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-4">
                <div className="row rowStyle">
                    <div className="col-6 d-flex justify-content-center">
                        <img src={scanning1} alt=""
                            className='imageDigital wow fadeInRight'
                            data-wow-duration="1s"
                            style={{ height: '80%' }}
                        />
                    </div>
                    <div className="col-6">
                        <div className="heading bottom-space text-center mt-5">
                            <h2>How 3D Scanning Works :</h2>
                        </div>
                        <div className="description text-center wow fadeInLeft" data-wow-duration="1s">
                            <p className='text'>3D scanning can be a faster and easier technique to create a 3D model for 3D printing if you just want to recreate an existing object.</p>
                            <p className='text'>Once you have your 3D model, you can add the modifications to it, it can actually be a great basis to start your project.</p>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>

    )
}

export default Scanning