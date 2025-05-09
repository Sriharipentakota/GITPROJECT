import React from "react";

const FAQ = () => {
    return (
        <div className="container mt-5">
            <h1>Frequently Asked Questions (FAQs)</h1>
            <h3>1. How do I place an order?</h3>
            <p>
                Browse the product categories, add items to your cart, and proceed to checkout. You will need to fill in your personal information and payment details.
            </p>
            <h3>2. What payment methods do you accept?</h3>
            <p>
                We accept major credit/debit cards, PayPal, and digital wallets like Google Pay and Apple Pay.
            </p>
            <h3>3. How can I return a product?</h3>
            <p>
                You can initiate a return by visiting the "My Orders" section and clicking on the "Return" button for the specific order.
            </p>
            <h3>4. How long does shipping take?</h3>
            <p>
                Shipping usually takes 3–7 business days, depending on your location.
            </p>
        </div>
    );
};

export default FAQ;