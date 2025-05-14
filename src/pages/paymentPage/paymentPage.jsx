import React, { useContext, useState, useEffect } from 'react';
import "./paymentPage.css";
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../product';
import InputField from '../../components/inputFieldComponent';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { textArea: initialTextArea, paymentDate: initialPaymentDate, randomNumber: initialRandomNumber, filteredProductsLength: initialFilteredProductsLength, filteredProducts: initialFilteredProducts } = location.state || {};

  // States for form fields
  const [textArea, setTextArea] = useState(initialTextArea || ''); // Pre-fill from state if available
  const [paymentDate, setPaymentDate] = useState(initialPaymentDate || ''); // Pre-fill from state if available
  const [randomNumber] = useState(initialRandomNumber || Math.floor(Math.random() * 1000000) + 1);

  // Filter products based on cart items
  const filteredProducts = initialFilteredProducts || PRODUCTS?.filter(product => cartItems[product.id] !== 0);
  const filteredProductsLength = initialFilteredProductsLength || filteredProducts?.length;

  console.log(getTotalCartAmount(), "textArea");

  // Redirect to /shop if cart is empty
  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      console.log("hello");
      navigate("/shop");
    }
  }, [getTotalCartAmount, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/payment-success", { state: { textArea, paymentDate, randomNumber, filteredProductsLength, filteredProducts } });
  }

  return (
    <>
      <div className="payment-header mt-5">
        <h1>Place Your Order</h1>
      </div>
      <div className="payment-container">
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="order-summary">
            <div className="order-id">
              <p><strong>Order ID:</strong> <b>{randomNumber}</b></p>
            </div>
            <div className="order-products">
              <p><strong>Selected Products:</strong> {filteredProducts?.map(e => e.name).join(', ')}</p>
            </div>
            <div className="order-quantity">
              <p><strong>Quantity:</strong> {filteredProductsLength}</p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="delivery-date"><strong>Delivery Date:</strong></label>
            <InputField
              id="delivery-date"
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="date-picker"
            />
          </div>

          <div className="form-group">
            <label htmlFor="shipping-address"><strong>Shipping Address:</strong></label>
            <textarea
              className="form-control"
              id="shipping-address"
              rows="3"
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
              placeholder="Enter your shipping address"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-button">Submit Order</button>
        </form>
      </div>
    </>
  );
}

export default PaymentPage;