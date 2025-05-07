import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/component.css'; // Updated CSS file for improved design

const OrderHistory = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const [orders, setOrders] = useState(
        JSON.parse(sessionStorage.getItem(`${loggedInUser.email}`)) || []
    );
    const [showModal, setShowModal] = useState(false);
    const [orderToCancel, setOrderToCancel] = useState(null);

    // Handle cancel order logic
    const handleCancelOrder = () => {
        if (orderToCancel) {
            const updatedOrders = orders.filter(order => order.orderId !== orderToCancel);
            sessionStorage.setItem(`${loggedInUser.email}`, JSON.stringify(updatedOrders));
            setOrders(updatedOrders);
            setShowModal(false); // Close the modal after updating orders
        }
    };

    // Open modal and set the order to be canceled
    const openCancelModal = (orderId) => {
        setOrderToCancel(orderId);
        setShowModal(true);
    };

    // Close modal without canceling the order
    const closeModal = () => {
        setShowModal(false);
        setOrderToCancel(null); // Reset the selected order to cancel
    };

    return (
        <div className="order-history-container">
            <h2 className="order-history-title">Your Orders</h2>
            {orders.length === 0 ? (
                <p className="no-orders-message">You have no orders yet.</p>
            ) : (
                <div className="order-cards-container">
                    {orders.map(order => (
                        <div className="order-card" key={order.orderId}>
                            <div className="order-header">
                                <h4>Order ID: {order.orderId}</h4>
                                <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
                            </div>
                            <div className="order-details">
                                <p><strong>Products:</strong> {order.products.map(e => e.name).join(', ')}</p>
                                <p><strong>Quantity:</strong> {order.quantity}</p>
                                <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                                <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                            </div>
                            <div className="order-actions">
                                <button
                                    className="cancel-order-button"
                                    onClick={() => openCancelModal(order.orderId)} // Open modal and set order to cancel
                                >
                                    Cancel Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to cancel this order?</p>
                        <div className="modal-actions">
                            <button
                                className="modal-confirm-button"
                                onClick={handleCancelOrder} // Confirm cancellation
                            >
                                Yes, Cancel
                            </button>
                            <button
                                className="modal-cancel-button"
                                onClick={closeModal} // Close modal
                            >
                                No, Keep
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button
                className="back-to-shop-button"
                onClick={() => navigate("/shop")}
            >
                Back to Shop
            </button>
        </div>
    );
};

export default OrderHistory;