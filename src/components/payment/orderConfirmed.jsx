import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../../components/component.css';
import { Tooltip } from 'react-tooltip';

const OrderConfirmed = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { randomNumber, filteredProducts, textArea, paymentDate, filteredProductsLength, paymentMethod, paymentDetails } = location.state || {};
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

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


    const handleDownloadInvoice = () => {
        const doc = new jsPDF();
        console.log('Generating invoice...', doc);

        // Centered Title
        doc.setFontSize(24);
        doc.text('Order Invoice', 105, 20, { align: 'center' });

        doc.setFontSize(14);

        // Starting Y position
        let y = 35;

        // Helper function for drawing labels and values centered
        function drawLabelValue(label, value) {
            doc.text(`${label}: ${value}`, 105, y, { align: 'center' });
            y += 8;
        }

        drawLabelValue('Order ID', randomNumber);
        drawLabelValue('Customer', loggedInUser?.name || '');
        drawLabelValue('Email', loggedInUser?.email || '');
        drawLabelValue('Delivery Date', paymentDate);
        drawLabelValue('Shipping Address', textArea);
        drawLabelValue('Payment Method', paymentMethod);

        if (paymentMethod === 'Cash on Delivery') {
            drawLabelValue('Person Name', paymentDetails?.personName || '');
            drawLabelValue('Mobile Number', paymentDetails?.mobileNumber || '');
        }

        y += 6;
        // Products Table Header
        doc.setFontSize(13);
        doc.text('Products', 105, y, { align: 'center' });
        y += 6;
        doc.setLineWidth(0.5);
        doc.line(40, y, 170, y); // Table top border

        y += 4;
        doc.setFontSize(12);
        doc.text('Name', 60, y, { align: 'center' });
        doc.text('Quantity', 150, y, { align: 'center' });

        y += 3;
        doc.line(40, y, 170, y); // Header bottom border

        // Products Rows
        y += 7;
        filteredProducts?.forEach(prod => {
            doc.text(prod.name, 60, y, { align: 'center' });
            doc.text(String(prod.quantity || 1), 150, y, { align: 'center' });
            y += 7;
        });

        // Table bottom border
        doc.line(40, y - 3, 170, y - 3);

        y += 8;
        doc.setFontSize(12);
        doc.text(`Total Quantity: ${filteredProductsLength}`, 105, y, { align: 'center' });

        y += 10;
        doc.setFontSize(10);
        doc.setTextColor(180);
        doc.text('Thank you for your order!', 105, y, { align: 'center' });

        doc.save(`Order_${randomNumber}_Invoice.pdf`);
    };

    return (
        <div className="confirmation-container">
            <div className='confirmation-header'>
                <h2>Order Confirmed!</h2>
                <i className="bi bi-receipt invoice-icon" onClick={handleDownloadInvoice} data-tooltip-id="invoice-icon" data-tooltip-content="Download Invoice" style={{ cursor: 'pointer' }} title="Download Invoice" data-tooltip-place="bottom" data-tooltip-delay-show="500" data-tooltip-delay-hide="500" data-tooltip-style="tooltip-style" data-tooltip-arrow="true" data-tooltip-arrow-size="5"
                >
                </i>
            </div>

            <p><strong>Order ID:</strong> {randomNumber}</p>
            <p><strong>Products:</strong> {filteredProducts?.map(e => e.name).join(', ')}</p>
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
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <button
                    onClick={handleOrderConfirmation}
                    className="confirm-button"
                >
                    Continue Shopping
                </button>
            </div>
            <Tooltip id="invoice-icon" />
        </div>
    );
};

export default OrderConfirmed;