import React, { useState } from 'react'
import transparency from '../assets/images/Transparency.png';
import Integrity from '../assets/images/Intégrity.png';
import Innovation from '../assets/images/Innovation.png';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.jpg';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
import partner5 from '../assets/images/partner5.jpg';
import partner6 from '../assets/images/partner6.png';
import partner7 from '../assets/images/partner7.png';
import partner8 from '../assets/images/partner8.png';
import partner9 from '../assets/images/partner9.png';
import partner10 from '../assets/images/partner10.png';
import partner11 from '../assets/images/partner11.png';
import partner13 from '../assets/images/partner13.png';
import partner14 from '../assets/images/partner14.jpg';
import partner15 from '../assets/images/partner15.png';
import partner16 from '../assets/images/partner16.jpg';
import partner17 from '../assets/images/partner17.png';
import partner18 from '../assets/images/partner18.png';
import partner19 from '../assets/images/partner19.png';
import partner20 from '../assets/images/partner20.png';
import partner21 from '../assets/images/partner21.png';
import partner22 from '../assets/images/partner22.jpg';
import partner23 from '../assets/images/partner23.png';
import partner24 from '../assets/images/partner24.png';
import partner25 from '../assets/images/partner25.png';
import partner26 from '../assets/images/partner26.png';
import './home.css'
import HomeVideo from './homeVideo/homeVideo';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import printingImage from "../assets/images/3D-printing.jpg";
import digitalApp from "../assets/images/ar.jpg";
import scanning from "../assets/images/scan-3d.jpg";
import bardoUp1 from "../assets/images/Bardo up/app-musee-bardo-up.png";
import bardoUp2 from "../assets/images/Bardo up/digital-app-1.png";
import bardoUp3 from "../assets/images/Bardo up/maxresdefault.jpg";
import durtek1 from "../assets/images/DurTeck/111.png";
import durtek2 from "../assets/images/DurTeck/222.png";
import durtek3 from "../assets/images/DurTeck/333.png";
import durtek4 from "../assets/images/DurTeck/444.png";
import durtek5 from "../assets/images/DurTeck/duerr-technik-gmbh-and-co-kg-logo-vector.png";
import durtek6 from "../assets/images/DurTeck/Picture22.jpg";
import durtek7 from "../assets/images/DurTeck/Picture23.jpg";
import durtek8 from "../assets/images/DurTeck/Picture24.jpg";
import durtek9 from "../assets/images/DurTeck/Picture25.jpg";
import magicEye1 from "../assets/images/Magie Eye/Picture6.jpg";
import magicEye2 from "../assets/images/Magie Eye/Picture7.jpg";
import magicEye3 from "../assets/images/Magie Eye/Picture8.jpg";
import museePourTous1 from "../assets/images/musee pour tous/museePourTous1.jpg";
import museePourTous2 from "../assets/images/musee pour tous/museePourTous2.jpg";
import museePourTous3 from "../assets/images/musee pour tous/museePourTous3.png";
import museePourTous4 from "../assets/images/musee pour tous/museePourTous4.jpg";
import museePourTous5 from "../assets/images/musee pour tous/museePourTous5.jpg";
import museePourTous6 from "../assets/images/musee pour tous/museePourTous6.jpg";
import museePourTous7 from "../assets/images/musee pour tous/museePourTous7.jpg";
import museePourTous8 from "../assets/images/musee pour tous/museePourTous8.jpg";
import museePourTous9 from "../assets/images/musee pour tous/museePourTous9.jpg";
import museePourTous10 from "../assets/images/musee pour tous/museePourTous10.jpg";
import ribat1 from "../assets/images/Ribat/Image1.png";
import ribat2 from "../assets/images/Ribat/Image2.png";
import ribat3 from "../assets/images/Ribat/Image3.png";
import ribat4 from "../assets/images/Ribat/Picture12.jpg";
import ribat5 from "../assets/images/Ribat/Picture13.jpg";
import ribat6 from "../assets/images/Ribat/Picture14.jpg";
import ribat7 from "../assets/images/Ribat/Picture15.jpg";
import ribat8 from "../assets/images/Ribat/Picture16.jpg";
import ribat9 from "../assets/images/Ribat/Picture17.jpg";
import ribat10 from "../assets/images/Ribat/Picture18.jpg";
import ribat11 from "../assets/images/Ribat/Picture19.jpg";
import ribat12 from "../assets/images/Ribat/Picture20.jpg";
import ribat13 from "../assets/images/Ribat/Picture21.jpg";
import ribat14 from "../assets/images/Ribat/Screenshot_20220303-124900_iphone13blue_portrait.png";
import ribat15 from "../assets/images/Ribat/Screenshot_20220303-125020_iphone13blue_portrait.png";
import ribat16 from "../assets/images/Ribat/Screenshot_20220303-125038_iphone13blue_portrait.png";
import tourDeTunisie1 from "../assets/images/tour de tunisie/1.jpg";
import tourDeTunisie2 from "../assets/images/tour de tunisie/10.jpg";
import tourDeTunisie3 from "../assets/images/tour de tunisie/18.jpg";
import tourDeTunisie4 from "../assets/images/tour de tunisie/2.jpg";
import tourDeTunisie5 from "../assets/images/tour de tunisie/21.jpg";
import tourDeTunisie6 from "../assets/images/tour de tunisie/5.jpg";
import tourDeTunisie7 from "../assets/images/tour de tunisie/6.jpg";
import tourDeTunisie8 from "../assets/images/tour de tunisie/7.jpg";
import tourDeTunisie9 from "../assets/images/tour de tunisie/9.jpg";
import tourDeTunisie10 from "../assets/images/tour de tunisie/Image10.png";
import tourDeTunisie11 from "../assets/images/tour de tunisie/Image4.png";
import tourDeTunisie12 from "../assets/images/tour de tunisie/Image5.png";
import tourDeTunisie13 from "../assets/images/tour de tunisie/Image6.png";
import tourDeTunisie14 from "../assets/images/tour de tunisie/Image7.png";
import tourDeTunisie15 from "../assets/images/tour de tunisie/Image8.png";
import tourDeTunisie16 from "../assets/images/tour de tunisie/Image9.png";
import tunisieVR1 from "../assets/images/Tunisie VR/Dougga VR/1.png";
import tunisieVR2 from "../assets/images/Tunisie VR/Dougga VR/11.png";
import tunisieVR3 from "../assets/images/Tunisie VR/Dougga VR/19.png";
import tunisieVR4 from "../assets/images/Tunisie VR/Dougga VR/2.png";
import tunisieVR5 from "../assets/images/Tunisie VR/Dougga VR/8.png";
import tunisieVR6 from "../assets/images/Tunisie VR/Dougga VR/com.epicgames.TunisieVR_Dougga-20220711-105231.jpg";
import tunisieVR7 from "../assets/images/Tunisie VR/Dougga VR/com.epicgames.TunisieVrDougga-20220208-111305[1]1.jpg";
import tunisieVR8 from "../assets/images/Tunisie VR/Dougga VR/cp3.PNG";
import tunisieVR9 from "../assets/images/Tunisie VR/Makther VR/274196326_497654665109619_514065226997702670_n.png";
import tunisieVR10 from "../assets/images/Tunisie VR/Makther VR/com.Makther.Gamevr-20220301-095940.jpg";
import tunisieVR11 from "../assets/images/Tunisie VR/Makther VR/cp10.PNG";
import tunisieVR12 from "../assets/images/Tunisie VR/Makther VR/cp11.PNG";
import tunisieVR13 from "../assets/images/Tunisie VR/Makther VR/cp15.PNG";
import tunisieVR14 from "../assets/images/Tunisie VR/Makther VR/cp19.PNG";
import tunisieVR15 from "../assets/images/Tunisie VR/Makther VR/cp3.PNG";
import tunisieVR16 from "../assets/images/Tunisie VR/Makther VR/cp9.PNG";
import tunisieVR17 from "../assets/images/Tunisie VR/Pilau VR/30.PNG";
import tunisieVR18 from "../assets/images/Tunisie VR/Pilau VR/31.PNG";
import tunisieVR19 from "../assets/images/Tunisie VR/Pilau VR/4.PNG";
import tunisieVR20 from "../assets/images/Tunisie VR/Pilau VR/6.PNG";
import tunisieVR21 from "../assets/images/Tunisie VR/Pilau VR/com.epicgames.TunisieVRPilaw-20220302-153905.jpg";
import tunisieVR22 from "../assets/images/Tunisie VR/Pilau VR/com.epicgames.TunisieVRPilaw-20220302-153922.jpg";
import tunisieVR23 from "../assets/images/Tunisie VR/Pilau VR/com.VRTunisie.Pilau-20220711-103826.jpg";
import tunisieVR24 from "../assets/images/Tunisie VR/Pilau VR/com.VRTunisie.Pilau-20220711-104402.jpg";
import tunisieVR25 from "../assets/images/Tunisie VR/Pilau VR/com.VRTunisie.Pilau-20220711-132334.jpg";


const Home = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="imageStyle no_highlights">
      <HomeVideo />
      {/* <img src={img} className="rev-slidebg imageStyle" alt="image description" data-bgposition="center center" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10"  data-bgfit="cover" data-no-retina /> */}
      {/* <section className="content-block quotation-block black-overlay-6 parallax" data-stellar-background-ratio="0.55"> */}


      <section className="content-block mr-4 ml-4">
        {/* <div className="col-lg-4 col-md-6">
              <div className="cIol-wrap">
                <div className="block-heading">
                  <h3 className="block-top-heading">WHAT WE DO</h3>
                  <h2 className="block-main-heading">EXPERTS</h2>
                  <span className="block-sub-heading">We build digital solutions.</span>
                  <div className="divider"><img src="img/divider.png" alt="images description" /></div>
                </div>
              </div>
            </div> */}
        <div className="row multiple-row v-align-row">
          <div className="col-lg-4 col-md-6">
            <div className="col-wrap">
              <div className="ico-box bg-gray-light has-radius-medium">
                <div className="icon">
                  <img src={printingImage} alt="" className='rounded' style={{ height: 300, width: '100%' }} />
                </div>
                <h4 className="content-title"><a href="#">3D Printing</a></h4>
                <div className="des">
                  <p className='mb-4'>Equiped with FDM and metal printing capabilities,our team can reach highests requirement cliant's for prototyping and/or small series.</p>
                </div>
                {/* <div className="link-holder">
                                                <a className="link-more" href="#">LEARN MORE</a>
                                            </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="col-wrap">
              <div className="ico-box bg-gray-light has-radius-medium">
                <div className="icon">
                  <img src={digitalApp} className='rounded' alt="" style={{ height: 300, width: '100%' }} />
                </div>
                <h4 className="content-title"><a href="#">Digital Applications</a></h4>
                <div className="des">
                  <p>Based on 3D models, AR/VR and mixed Reality technologies, 3D wave team's developp for his clients mobile solutions like mobile apps, interactive Wall/Floor, AR/VR App...</p>
                </div>
                {/* <div className="link-holder">
                    <a className="link-more" href="#">LEARN MORE</a>
                  </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="col-wrap">
              <div className="ico-box bg-gray-light has-radius-medium">
                <div className="icon">
                  <img className="custom-icon-list rounded" src={scanning} alt="" style={{ height: 300, width: '100%' }} />
                </div>
                <h4 className="content-title "><a href="#">3D Scanning</a></h4>
                <div className="des">
                  <p className='mb-4'>Reverse engineering,dimentional controls or tomography, we offer scaning services with very high accuracy.</p>
                </div>
                {/* <div className="link-holder">
                    <a className="link-more" href="#">LEARN MORE</a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-block quotation-block black-overlay-6 parallax backImage" data-stellar-background-ratio="0.55">
        <div class="container">
          <div class="inner-wrapper">
            <h2 class="text-white" >3D WAVE NEW EDGE OF EXPERIENCE !</h2>
            <h3 class="block-top-heading text-white" >3D WAVE is a start-up born in 2018, located between Doha and Sousse, specialized in 3D printing, 3D scanning, virtual and augmented reality, composed of a young group , dynamic and experienced combining different skills .</h3>
            {/* <div class="btn-container">
              <a href="#" class="btn btn-primary">VIEW VACANCIES</a>
            </div> */}
          </div>
        </div>
      </section>


      {/* <div className="threeImages">
        <div className='blocImage'>
          <div className="col-4 col-s-4 first">
            <div className='col-8 col-s-8  textFirst'>
              <h3 style={{ color: 'white' }} className='titleImage'>3D Printing</h3>
              <h4 style={{ color: 'white' }} className='textSecondImage'>Equiped with FDM and metal printing capabilities,our team can reach highests requirement cliant's for prototyping and/or small series.</h4>
            </div>
          </div>
          <div className="col-4 col-s-4 second ">
            <div className='col-8 col-s-8  textFirst'>
              <h3 style={{ color: 'white' }} className='titleImage'>Digital Applications</h3>
              <h4 style={{ color: 'white' }} className='textSecondImage'>Based on 3D models, AR/VR and mixed Reality technologies, 3D wave team's developp for his clients mobile solutions like mobile apps, interactive Wall/Floor, AR/VR App...</h4>
            </div>
          </div>
          <div className="col-4 col-s-4 third">
            <div className='col-8 col-s-8  textFirst'>
              <h3 style={{ color: 'white' }} className='titleImage'>3D Scanning</h3>
              <h4 style={{ color: 'white' }} className='textSecondImage'>Reverse engineering,dimentional controls or tomography, we offer scaning services with very high accuracy.</h4>
            </div>
          </div>
        </div>
      </div> */}

      {/* the work */}
      {/* <section className="content-block portfolio-block ourProjects" id="container">
        <div className="bottom-space text-center text-uppercase">
          <h2>Our Projects</h2>
          <h4>Wonderful digital things require a good mix of combined skills</h4>
        </div>
        <ul className="filter-nav text-center button-group filter-button-group">
          <li>
            <button data-filter="*">ALL</button>
          </li>
          <li>
            <button data-filter=".ui">UI/UX DESIGN</button>
          </li>
          <li>
            <button data-filter=".programming">PROGRAMMING</button>
          </li>
          <li>
            <button data-filter=".photography">PHOTOGRAPHY</button>
          </li>
          <li>
            <button data-filter=".ecommerce">ECOMMERCE</button>
          </li>
        </ul>
        <div className="row grid">
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 ui photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-37.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography programming">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-32.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-md-6 ui photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-33.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 ecommerce programming">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-34.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 programming ecommerce">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-35.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 ecommerce ui">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src="img/img-36.jpg" alt="images description" />
              <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section> */}
      <section className="content-block portfolio-block ourProjects" id="container">
        <div className="bottom-space text-center text-uppercase">
          <h2>Our Projects</h2>
          <h4>Wonderful digital things require a good mix of combined skills</h4>
        </div>
        <ul className="filter-nav text-center button-group filter-button-group">
          <li>
            <button data-filter="*">ALL</button>
          </li>
          <li>
            <button data-filter=".bardoUp">Bardo Up</button>
          </li>
          <li>
            <button data-filter=".durTeck">DurTeck</button>
          </li>
          <li>
            <button data-filter=".magicEye">Magic Eye</button>
          </li>
          <li>
            <button data-filter=".museePourTous">Musée Pour Tous</button>
          </li>
          <li>
            <button data-filter=".ribat">Ribat</button>
          </li>
          <li>
            <button data-filter=".tourDeTunisie">Tour de Tunisie</button>
          </li>
          <li>
            <button data-filter=".tunisieVR">Tunisie VR</button>
          </li>
        </ul>
        <div className="row grid">
          {/* Bardo Up */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 bardoUp photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={bardoUp1} alt="images description" style={{ height: '10%' }} />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 bardoUp photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={bardoUp2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 bardoUp photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={bardoUp3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          {/* Durtek */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek1} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek4} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek5} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek6} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek7} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek8} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography durTeck">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={durtek9} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          {/* Magic Eye */}
          <div className="gallery-item col-lg-4 col-md-6 magicEye photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={magicEye1} alt="images description" style={{ height: '100%' }} />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption>  */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-md-6 magicEye photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={magicEye2} alt="images description" style={{ height: '100%' }} />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-md-6 magicEye photography">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={magicEye3} alt="images description" style={{ height: '100%' }} />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>



          {/* Musée pour Tous */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous1} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous4} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous5} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous6} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous7} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous8} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous9} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 photography museePourTous">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={museePourTous10} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>


          {/* Ribat */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat1} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat4} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat5} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat6} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat7} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat8} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat9} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat10} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat11} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat12} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat13} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat14} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 programming ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat15} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 programming ribat">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={ribat16} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>


          {/* Tour de tunisie */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie1} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie4} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie5} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie6} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie7} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie8} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie9} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie10} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie11} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie12} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie13} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie14} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie15} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6  tourDeTunisie">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tourDeTunisie16} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>


          {/* Tunisie VR */}
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR1} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR2} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR3} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR4} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR5} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR6} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR7} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR8} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR9} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR10} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR11} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR13} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR14} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR15} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR16} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR17} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR18} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR19} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR20} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR21} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR22} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR23} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR24} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="gallery-item col-lg-4 col-s-4 col-md-6 col-s-6 tunisieVR">
            <figure className="picture-item img-block shine-effect image-zoom port-v2">
              <img src={tunisieVR25} alt="images description" />
              {/* <figcaption>
                <div className="link-box">
                  <a href="#">
                    <span className="icon-heart"><span className="sr-only">&amp;</span></span>
                  </a>
                  <a href="#">
                    <span className="icon-link"><span className="sr-only">&amp;</span></span>
                  </a>
                </div>
              </figcaption> */}
            </figure>
          </div>


        </div>
      </section>

      <div className="container">

        <div className="bottom-space text-center text-uppercase">
          <h2>Your Digital Transformation</h2>
          <h4 style={{ color: 'blue' }}>On time , On Quality..</h4>
        </div>


        <div className="row ">
          <div className="col-2"></div>
          <div className="col-2 d-flex flex-column justify-content-center">
            <img src={Innovation} className="mb-3" alt="Innovation" />
            <h3 className='d-flex justify-content-center'>Innovation</h3>

          </div>
          <div className="col-1"></div>
          <div className="col-2 ">
            <img src={Integrity} className="mb-3" alt="Integrity" />
            <h3 className='d-flex justify-content-center'>Integrity</h3>

          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={transparency} className="mb-3" alt="transparency" />
            <h3 className='d-flex justify-content-center'>Transparency</h3>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="text-center text-uppercase ourPartner" >
        <h2>Our partners</h2>
        {/* <h4 style={{ color: 'blue' }}>On time , On Quality..</h4> */}
      </div>

      {/* <div className="row">
        <div className="col-1"></div>
        <div className="col-10">

        </div>
        <div className="col-1"></div>
      </div> */}

      {/* <div className="parent-wrapper">
        <div className="parent justify-content-center">
          <div className="child">
            <img src={partner1} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner2} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner3} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner4} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner5} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner6} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner7} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner8} alt="partner1" className='partnerImage' />
          </div>
        </div>
        <div className="parent justify-content-center mt-4">
          <div className="child">
            <img src={partner9} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner10} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner11} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner13} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner14} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner15} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner16} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner17} alt="partner1" className='partnerImage' />
          </div>
        </div>
        <div className="parent justify-content-center mt-4">
          <div className="child">
            <img src={partner18} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner19} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner20} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner21} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner22} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner23} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner24} alt="partner1" className='partnerImage' />
          </div>
          <div className="child">
            <img src={partner25} alt="partner1" className='partnerImage' />
          </div>
        </div>
        <div className="parent justify-content-center mt-4">
          <div className="child">
            <img src={partner26} alt="partner1" className='partnerImage' />
          </div>
        </div>
      </div> */}

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        //  ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
        //  dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className='carouselStyle mb-4'
      >
        <div className='row mb-4'>
          <img src={partner1} alt='' />
        </div>
        <div>
          <img src={partner2} alt='' />
        </div>
        <div>
          <img src={partner3} alt='' />
        </div>
        <div>
          <img src={partner4} alt='' />
        </div>
        <div>
          <img src={partner5} alt='' />
        </div>
        <div>
          <img src={partner6} alt='' />
        </div>
        <div>
          <img src={partner7} alt='' />
        </div>
        <div>
          <img src={partner8} alt='' />
        </div>
        <div>
          <img src={partner9} alt='' />
        </div>
        <div>
          <img src={partner10} alt='' />
        </div>
        <div>
          <img src={partner11} alt='' />
        </div>
        <div>
          <img src={partner13} alt='' />
        </div>
        <div>
          <img src={partner14} alt='' />
        </div>
        <div>
          <img src={partner15} alt='' />
        </div>
        <div>
          <img src={partner16} alt='' />
        </div>
        <div>
          <img src={partner17} alt='' />
        </div>
        <div>
          <img src={partner18} alt='' />
        </div>
        <div>
          <img src={partner19} alt='' />
        </div>
        <div>
          <img src={partner20} alt='' />
        </div>
        <div>
          <img src={partner21} alt='' />
        </div>
        <div>
          <img src={partner22} alt='' />
        </div>
        <div>
          <img src={partner23} alt='' />
        </div>
        <div>
          <img src={partner24} alt='' />
        </div>
        <div>
          <img src={partner25} alt='' />
        </div>
        <div>
          <img src={partner26} alt='' />
        </div>
      </Carousel>
    </div >

  )
}

export default Home