import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <div className="footer-container mt-5">
                <div className="d-flex flex-wrap justify-content-between icons-container align-items-center">
                    <div className="text-center text-md-start">
                        <h2>Get connected with us on social networks:</h2>
                    </div>
                    <div className="d-flex justify-content-center gap-3 icons-div">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-google"></i>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-md-around p-3">
                    <div className="text-center text-md-start">
                        <h3>Company Name</h3>
                        <p>sjkdnwelkmsaxiwklemsmm</p>
                    </div>
                    <div className="text-center text-md-start">
                        <h3>Products</h3>
                        <ul className="ul-container">
                            <li>item-1</li>
                            <li>item-2</li>
                            <li>item-3</li>
                            <li>item-4</li>
                        </ul>
                    </div>
                    <div className="text-center text-md-start">
                        <h3>Contact Us</h3>
                        <ul className="ul-container">
                            <li className="d-flex align-items-center gap-3">
                                <span><i className="bi bi-house-door-fill"></i></span>item-1
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <span><i className="bi bi-envelope"></i></span>item-2
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <span><i className="bi bi-telephone"></i></span>item-3
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <span><i className="bi bi-printer"></i></span>item-4
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};