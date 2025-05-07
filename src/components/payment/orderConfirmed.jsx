import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../components/component.css';

const OrderConfirmed = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { randomNumber, filteredProducts, textArea, paymentDate, filteredProductsLength, paymentMethod, paymentDetails } = location.state || {};
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')); // Get logged-in user's details

    const handleOrderConfirmation = () => {
        // Save order details in session storage
        const newOrder = {
            orderId: randomNumber,
            products: filteredProducts,
            quantity: filteredProductsLength,
            deliveryDate: paymentDate,
            shippingAddress: textArea,
            paymentMethod,
            paymentDetails
        };

        const userOrders = JSON.parse(sessionStorage.getItem(`${loggedInUser.email}`)) || [];
        userOrders.push(newOrder);
        sessionStorage.setItem(`${loggedInUser.email}`, JSON.stringify(userOrders));

        // Navigate to shop
        navigate("/shop");
    };

    return (
        <div className="confirmation-container">
            <h2>Order Confirmed!</h2>
            <p><strong>Order ID:</strong> {randomNumber}</p>
            <p><strong>Products:</strong> {filteredProducts.map(e => e.name).join(', ')}</p>
            <p><strong>Quantity:</strong> {filteredProductsLength}</p>
            <p><strong>Delivery Date:</strong> {paymentDate}</p>
            <p><strong>Shipping Address:</strong> {textArea}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>

            {paymentMethod === 'Cash on Delivery' && (
                <>
                    <p><strong>Person Name:</strong> {paymentDetails.personName}</p>
                    <p><strong>Mobile Number:</strong> {paymentDetails.mobileNumber}</p>
                </>
            )}
            <button
                onClick={handleOrderConfirmation} 
                className="confirm-button"
            >
                Continue Shopping
            </button>
        </div>
    );
};

export default OrderConfirmed;