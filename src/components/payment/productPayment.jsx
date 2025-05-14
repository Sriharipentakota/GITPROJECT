import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../components/component.css';
import { MdEdit } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import { ShopContext } from '../../context/shop-context';

const ProductPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(ShopContext);
  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      navigate("/shop");
    }
  }, [getTotalCartAmount, navigate]);
  const { textArea, paymentDate, randomNumber, filteredProductsLength, filteredProducts } = location.state || {};
  const handleEdit = () => {
    navigate("/payment", { state: { textArea, paymentDate, randomNumber, filteredProductsLength, filteredProducts } });
  }
  const handleConfirmAndPay = () => {
    navigate("/payment-options", { state: { randomNumber, filteredProducts, textArea, paymentDate, filteredProductsLength } });
  };



  return (
    <>
      <div className="payment-summary">
        <div><h2 className='m-0'>Order Summary <span className='ps-5 edit-icon'><MdEdit onClick={handleEdit} data-tooltip-id="edit-tooltip" data-tooltip-content="Edit details" /></span></h2></div>
        <div className="order-details">
          <p><strong>Ordered Products:</strong> {filteredProducts?.map(e => e.name).join(', ')}</p>
          <p><strong>Quantity:</strong> {filteredProductsLength}</p>
          <p><strong>Delivery Date:</strong> {paymentDate}</p>
          <p><strong>Order ID:</strong> {randomNumber}</p>
          <p><strong>Shipping Address:</strong> {textArea}</p>
        </div>
        <button className="confirm-button" onClick={handleConfirmAndPay}>Confirm and Pay</button>
      </div>
      <Tooltip id="edit-tooltip" />
    </>
  );
};

export default ProductPayment;