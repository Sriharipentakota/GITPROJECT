import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="container mt-5">
            <h1>Privacy Policy</h1>
            <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            </p>
            <h3>Information We Collect</h3>
            <ul style={{ listStyle: "none" }}>
                <li>Personal details such as name, email, and contact information.</li>
                <li>Payment details for processing transactions securely.</li>
                <li>Browsing behavior to improve your shopping experience.</li>
            </ul>
            <h3>How We Use Your Information</h3>
            <ul style={{ listStyle: "none" }}>
                <li>To process your orders and provide customer support.</li>
                <li>To improve our website and services.</li>
                <li>To send promotional emails (only if you opt-in).</li>
            </ul>
            <h3>Data Protection</h3>
            <p>
                We employ industry-standard security measures to protect your data from unauthorized access. Your trust is our priority.
            </p>
        </div>
    );
};

export default PrivacyPolicy;