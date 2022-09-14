import React, { useRef, useState } from 'react';
import './Contact.css';
import contact from '../../assets/images/contact.jpg';
import emailjs from '@emailjs/browser';

function Contact() {
    const [userName, setUserName] = useState("");
    const [userLname, setUserLname] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");
    const [userPhone, setUserPhone] = useState();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // const m = {userName,userLname,userEmail,message,userPhone}
        console.log(form.current);        
        emailjs.sendForm('service_zbhuscc', 'template_1e32kad', form.current, 'KSBGXwysGF7hhmlJa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='no_highlights'>
            <img src={contact} alt="" className='highImageIndustrial' height={600} />

            <section className="content-block pb-0">
                <div className="container">
                    <div className="contact-container">
                        <h6 className="content-title contact-title">GET IN TOUCH WITH US</h6>
                        <div className="row">
                            <div className="col-lg-5">

                                <form ref={form} onSubmit={sendEmail} method="post" id="contact_form" className="waituk_contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                       placeholder="FIRST NAME *"
                                                       id="con_fname" 
                                                       name="user_name" 
                                                       className="form-control" 
                                                       onChange={(e)=>{setUserName(e.target.value)}}
                                                       />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" 
                                                       placeholder="LAST NAME *" 
                                                       id="con_lname" 
                                                       name="user_lname" 
                                                       className="form-control"
                                                       onChange={(e)=>{setUserLname(e.target.value)}}
                                                       />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="tel" 
                                                       placeholder="PHONE NUMBER" 
                                                       id="user_phone" 
                                                       name="user_phone" 
                                                       className="form-control" 
                                                       onChange={(e)=>{setUserPhone(e.target.value)}}
                                                       />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" 
                                                       placeholder="EMAIL ADDRESS *"
                                                       id="user_email" 
                                                       name="user_email" 
                                                       className="form-control" 
                                                       onChange={(e)=>{setUserEmail(e.target.value)}}
                                                       />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" 
                                                  placeholder="MESSAGE"
                                                  id="message"
                                                  name="message"
                                                  onChange={(e)=>{setMessage(e.target.value)}}
                                                  ></textarea>
                                    </div>
                                    <div className="btn-container">
                                        <button type='submit' id="btn_sent" className="btn btn-primary btn-arrow">SEND MESSAGE</button>
                                    </div>
                                </form>


                                
                            </div>
                            <div className="col-lg-7 col-xl-5 offset-xl-1" >
                                <div className="info-slot d-inline-flex" >
                                    <div className="icon"><span className="custom-icon-map-marker"></span></div>
                                    <div className="text" style={{ width: 500 }}>
                                        A18 Pôle technologique Sousse 4054, Tunisia.
                                        <br />
                                        Al Manaa Tower 4th Floor, Office A.
                                        <br />
                                        Ben Mahmoud st. P.O Box : 63807 Doha, Qatar.

                                    </div>
                                </div>
                                <div className="info-slot d-inline-flex">
                                    <div className="icon"><span className="custom-icon-headset"></span></div>
                                    <div className="text" style={{ width: 500 }}>
                                        <ul className="content-list contact-list">
                                            <li><span className="label-text">Tunisia</span> <a href="tel:+21628899806">(+216) 28899806</a></li>
                                            <li><span className="label-text">Tunisia</span> <a href="tel:+21629891161">(+216) 29891161</a></li>
                                            <li><span className="label-text">qatar</span> <a href="tel:+97433567705">(+974) 33567705</a></li>
                                            <li><span className="label-text">algeria</span> <a href="tel:+213559442480">(+213) 559442480</a></li>
                                            <li><span className="label-text">germany</span> <a href="tel:+4917658855046">(+49) 17658855046</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-slot d-inline-flex">
                                    <div className="icon"><span className="custom-icon-message"></span></div>
                                    <div className="text" style={{ width: 500 }}>
                                        <ul className="content-list contact-list">
                                            <li className='mt-5'><a href="mailto:support@roxine-online">contact@3dwave.tech</a></li>
                                            {/* <li><a href="mailto:info@roxine-online.com">info@roxine-online.com</a></li>
                                            <li><a href="mailto:help@roxine-online.com">help@roxine-online.com</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className=" embed-responsive-21by9 grayscaled-map">
                <iframe className='map'
                    src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.819834, 10.592237&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    height="450"
                    style={{ border: 0 }}
                >
                </iframe>
                {/* <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0605547231917!2d-0.33554378354576586!3d51.47540277962994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760cf99dee6c25%3A0xc9d2780dbbcbb933!2sLondon+Rd%2C+Isleworth+TW7%2C+UK!5e0!3m2!1sen!2snp!4v1473394388477"
                    height="450"
                    style={{ border: 0 }}
                >
                </iframe> */}
            </div>
        </div>
    )
}

export default Contact