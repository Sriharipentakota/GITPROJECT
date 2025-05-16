import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="container mt-5">
            <h1>Terms and Conditions</h1>
            <p>
                By using our website, you agree to the following terms and conditions. Please read them carefully.
            </p>
            <h3>Usage of the Website</h3>
            <ul style={{ listStyle: "none" }}>
                <li>Users must be 18 years or older to make purchases.</li>
                <li>You agree not to misuse the website for illegal activities.</li>
            </ul>
            <h3>Orders and Payments</h3>
            <ul style={{ listStyle: "none" }}>
                <li>All prices are subject to change without notice.</li>
                <li>Orders will only be processed after payment confirmation.</li>
            </ul>
            <h3>Refund and Return Policy</h3>
            <p>
                Please refer to our refund and return policy for details on returning items and seeking refunds.
            </p>
        </div>
    );
};

export default TermsAndConditions;