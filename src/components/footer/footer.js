import React from 'react'
import img from '../../assets/images/3dwave.png';
function Footer() {
    return (
        <div>
            <footer className="footer no_highlights">
                <div className="content-block footer-main text-center">
                    <div className="container">
                        <div className="waituk_newsletter-form">
                            <img src={img} alt="3dwave" style={{ width: '30%' }} />
                        </div>
                        <div className="content-block footer-info">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="holder">
                                        <span className="icon custom-icon-phone"></span>
                                        <p>Call Us On</p>
                                        <p>Tunisia : +216 28899806</p>
                                        <p>Tunisia : +216 29891161</p>
                                        <p>Qatar : +974 33567705</p>
                                        <p>Algeria :  +213 559442480</p>
                                        <p>Germany  : +49 17658855046</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="holder">
                                        <span className="icon custom-icon-email"></span>
                                        <p>Email Us At</p>
                                        <p><a href="mailto:waituk.net">contact@3dwave.tech</a></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="holder">
                                        <span className="icon custom-icon-pin"></span>
                                        <p>Visit Office</p>
                                        <p>A18 Pôle technologique Sousse 4054, Tunisia.</p>
                                        <p>Al Manaa Tower 4th Floor, Office A.</p>
                                        <p>Ben Mahmoud st. P.O Box : 63807 Doha, Qatar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="social-network">
                            <li><a href="#"><span className="icon-facebook"></span></a></li>
                            <li><a href="#"><span className="icon-twitter"></span></a></li>
                            <li><a href="#"><span className="icon-google-plus"></span></a></li>
                            <li><a href="#"><span className="icon-pinterest"></span></a></li>
                            <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="container">
                        <p>Powered By 3D wave </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer