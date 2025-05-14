import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import InputField from "../inputFieldComponent";

export const Footer = () => {
    return (
        <footer className="footer-container mt-5">
            {/* Social Media Section */}
            <div className="d-flex flex-wrap justify-content-between icons-container align-items-center">
                <div className="text-center text-md-start">
                    <h2>Stay Connected with Us</h2>
                </div>
                <div className="d-flex justify-content-center gap-3 icons-div">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </div>

            {/* Footer Content Section */}
            <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-md-around p-3">
                {/* About Section */}
                <div className="text-center text-md-start">
                    <h3>About Us</h3>
                    <p>
                        We are a one-stop destination for all your shopping needs.
                        Discover the best deals and quality products across various categories.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center text-md-start">
                    <h3>Quick Links</h3>
                    <ul className="ul-container">
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                        <li><a href="/faq">FAQs</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div className="text-center text-md-start">
                    <h3>Contact Us</h3>
                    <ul className="ul-container">
                        <li className="d-flex align-items-center gap-3">
                            <span><i className="bi bi-house-door-fill"></i></span>1234 Market Street, CA
                        </li>
                        <li className="d-flex align-items-center gap-3">
                            <span><i className="bi bi-envelope"></i></span>support@example.com
                        </li>
                        <li className="d-flex align-items-center gap-3">
                            <span><i className="bi bi-telephone"></i></span>+1 (555) 123-4567
                        </li>
                        <li className="d-flex align-items-center gap-3">
                            <span><i className="bi bi-clock"></i></span>Mon-Fri: 9:00 AM to 6:00 PM
                        </li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="text-center text-md-start">
                    <h3>Subscribe to our Newsletter</h3>
                    <form className="newsletter-form">
                        <InputField
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                            label="Email"
                        />
                        <button type="submit" className="newsletter-btn">Subscribe</button>
                    </form>
                    <p>Get the latest updates about our products and offers.</p>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods text-center mt-4">
                <h3>We Accept</h3>
                <div className="d-flex justify-content-center gap-3 mt-2">
                    <i className="bi bi-credit-card"></i>
                    <i className="bi bi-paypal"></i>
                    <i className="bi bi-apple"></i>
                    <i className="bi bi-google"></i>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom text-center mt-4">
                <p>© 2025 Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};