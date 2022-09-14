import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Scanning from '../screens/3dScanning/Scanning';
import App from '../App';
import Footer from '../components/footer/footer';
import Navbar from '../components/header/navbar';
import Home from '../home/home';
import Actualities from '../screens/actualities/Actualities';
import Challenges from '../screens/chalenges/Challenge';
import Industrial from '../screens/industrial/Industrial';
import OurServices from '../screens/ourServices/OurServices';
import AboutUs from '../screens/aboutUs/AboutUs';
import Contact from '../screens/contact/Contact';
import DigitalApplication from '../screens/digitalApplication/DigitalApplication';

const RouterConfig = () => {
    return (
        <Router>
            <div class="white-overlay">

                <nav class="nav-wrap bg-white">
                    <div class="nav-trigger nav-trigger-close">
                        <a href="#">Close Panel <i class="icon-long-arrow-right"></i> </a>
                        <div class="divider-border"><span class="sr-only"></span></div>
                    </div>

                    <div class="col-sm-6 pb-3">
                        <a href="#" class="btn btn-black btn-small-font btn-solid-facebook has-radius-small"><span class="icon-facebook"><span class="sr-only">&nbsp;</span></span> LOGIN WITH FACEBOOK</a>
                    </div>
                    <div class="col-sm-6">
                        <a href="#" class="btn btn-black btn-small-font btn-solid-google has-radius-small"><span class="icon-google-plus"><span class="sr-only">&nbsp;</span></span> LOGIN WITH GOOGLE</a>
                    </div>
                    <div class="divider-border"><span class="sr-only"></span></div>
                    <ul class="side-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="blog-single.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <nav class="header-links">
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                        </ul>
                    </nav>
                    <div class="divider-border"><span class="sr-only"></span></div>
                    <div class="p-3">
                        <ul class="social-network square-icon shadowed-icon">
                            <li><a href="#"><span class="icon-facebook"></span></a></li>
                            <li><a href="#"><span class="icon-twitter"></span></a></li>
                            <li><a href="#"><span class="icon-google-plus"></span></a></li>
                            <li><a href="#"><span class="icon-pinterest"></span></a></li>
                            <li><a href="#"><span class="icon-dribbble"></span></a></li>
                        </ul>
                    </div>
                </nav>
                <div id="wrapper" class="no-overflow-x">
                    <div class="page-wrapper"></div>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/scanning" element={<Scanning />} />
                            <Route exact path="/actualities" element={<Actualities />} />
                            <Route exact path="/challenge" element={<Challenges />} />
                            <Route exact path="/digitalapplication" element={<DigitalApplication />} />
                            <Route exact path="/industrial" element={<Industrial />} />
                            <Route exact path="/3dscaning" element={<Scanning />} />
                            <Route exact path="/ourservices" element={<OurServices />} />
                            <Route exact path="/aboutus" element={<AboutUs />} />
                            <Route exact path="/contact" element={<Contact />} />
                        </Routes>
                        <Footer />
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default RouterConfig