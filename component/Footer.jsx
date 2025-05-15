import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-white py-4" style={{ backgroundColor: '#04042a' }}>
            <div className="container text-center text-md-start">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-3 mb-3">
                        <div className="img_circle1">
                            <Image src='/web.png' width={100} height={100} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h5>About Us</h5>
                        <p className="">
                            We provide the best services to enhance your experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer_nav_items">Home</a></li>
                            <li><a href="#" className="footer_nav_items">Services</a></li>
                            <li><a href="#" className="footer_nav_items">Contact</a></li>
                            <li><a href="#" className="footer_nav_items">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 mb-3 text-center text-md-start">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <a href="#" className="footer_fa_icon">
                                <FaFacebook />
                            </a>
                            <a href="#" className="footer_fa_icon">
                                <FaTwitter />
                            </a>
                            <a href="#" className="footer_fa_icon">
                                <FaInstagram />
                            </a>
                            <a href="#" className="footer_fa_icon">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-top mt-3 pt-3 text-center text-light">
                    &copy; {new Date().getFullYear()} Priyanshu Maurya. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
