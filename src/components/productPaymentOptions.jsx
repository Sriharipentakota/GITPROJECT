import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './component.css';
import { FaCreditCard, FaUniversity, FaMobileAlt, FaMoneyBillWave, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa'; // Import alternative icons
import { Tooltip } from 'react-tooltip';
import { ShopContext } from '../context/shop-context';
import { ThreeDots } from 'react-loader-spinner';

const PaymentOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { checkout } = useContext(ShopContext);
  const { randomNumber, filteredProducts, textArea, paymentDate, filteredProductsLength } = location.state || {};

  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cvv: '',
    expiry: '',
    cardHolderName: '',
    upiOption: '',
    upiId: '',
    bankOption: '',
    accountNumber: '',
    ifsc: '',
    mobileNumber: '',
    personName: '',
  });
  const [cardError, setCardError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [expiryError, setExpiryError] = useState('');
  const [upiIdField, setUpiIdField] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(paymentDetails, "paymentDetails");
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    // console.log(value.length, "value");
    if (/^\d*$/.test(value) && value.length <= 16) {
      setCardError(''); // Clear the error if valid
      setPaymentDetails({ ...paymentDetails, cardNumber: value });
    } else if (value.length > 16) {
      setCardError('Card number must be exactly 16 digits.');
    } else if (value.length < 16) {
      setCardError('Card number must be exactly 15 digits.');
    };
  }

  // Handle changes for CVV
  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 3) {
      setCvvError(''); // Clear the error if valid
      setPaymentDetails({ ...paymentDetails, cvv: value });
    } else if (value.length > 3) {
      setCvvError('CVV must be exactly 3 digits.');
    }
  };
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    // If the value is being cleared, reset it without adding the slash
    if (value.length === 0) {
      setPaymentDetails({ ...paymentDetails, expiry: '' });
      setExpiryError(''); // Clear any errors
      return;
    }

    // Limit to 4 characters (MMYY)
    if (value.length > 4) value = value.slice(0, 4);

    // Add slash (/) after MM if required
    if (value.length >= 2) {
      const month = parseInt(value.slice(0, 2), 10);
      if (month < 1 || month > 12) {
        setExpiryError('Enter a valid month (01–12).');
      } else {
        setExpiryError('');
      }
      value = `${value.slice(0, 2)}${value.length > 2 ? '/' : ''}${value.slice(2)}`; // Add slash dynamically
    } else {
      setExpiryError(''); // Clear any errors if the input is incomplete
    }

    setPaymentDetails({ ...paymentDetails, expiry: value });
  };
  const handleUpiOptionChange = (e) => {
    const value = e.target.value;
    // console.log(value, "upi value");
    setUpiIdField(value === 'others' ? true : false);
    setPaymentDetails({ ...paymentDetails, upiOption: value })
  }
  // console.log(upiIdField, "upiIdField");


  const getCardIcon = () => {
    const firstDigit = paymentDetails.cardNumber.charAt(0);
    switch (firstDigit) {
      case '1':
        return <FaCcVisa className="card-icon" data-tooltip-id="visa-card" data-tooltip-content="Visa Card" />;
      case '2':
        return <FaCcMastercard className="card-icon" data-tooltip-id="master-card" data-tooltip-content="Master Card" />;
      case '3':
        return <FaCreditCard className="card-icon" data-tooltip-id="rupay-card" data-tooltip-content="Rupay Card" />; // Use a generic icon for Rupay or other cards
      case '4':
        return <FaCcAmex className="card-icon" data-tooltip-id="amex-card" data-tooltip-content="AMEX Card" />;
      default:
        return null;
    }
  };

  const handlePayment = () => {
    if (selectedMethod === 'Credit/Debit Card') {
      if (paymentDetails.cardNumber.length !== 16) {
        setCardError('Card number must be 16 digits.');
        return;
      }
      if (!paymentDetails.cvv || !paymentDetails.expiry || !paymentDetails.cardHolderName) {
        alert('Please fill all card details.');
        return;
      }
    }
    if (selectedMethod === 'UPI' && (!paymentDetails.upiOption || (!paymentDetails.upiId && paymentDetails.upiOption === 'others'))) {
      alert('Please select a UPI option and enter your UPI ID.');
      return;
    }
    if (selectedMethod === 'Net Banking' && (!paymentDetails.bankOption || !paymentDetails.accountNumber || !paymentDetails.ifsc)) {
      alert('Please fill all net banking details.');
      return;
    }
    if (selectedMethod === 'Cash on Delivery' && (!paymentDetails.mobileNumber || !paymentDetails.personName)) {
      alert('Please fill all details for Cash on Delivery.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/order-confirmed', {
        state: {
          randomNumber,
          filteredProducts,
          textArea,
          paymentDate,
          filteredProductsLength,
          paymentMethod: selectedMethod,
          paymentDetails,
        },
      });
      checkout();
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#545a69"
            ariaLabel="three-dots-loading"
            wrapperClassName="landing-loader"
            visible={true}
            variant="bounce"
          />
        </div>
      ) : (
        <div className="payment-options-container">
          <h2>Choose a Payment Method</h2>
          <div className="payment-methods">
            <div className="payment-method" onClick={() => setSelectedMethod('Credit/Debit Card')}>
              <FaCreditCard className="payment-icon" />
              <p>Credit/Debit Card</p>
            </div>
            <div className="payment-method" onClick={() => setSelectedMethod('UPI')}>
              <FaMobileAlt className="payment-icon" />
              <p>UPI Payment</p>
            </div>
            <div className="payment-method" onClick={() => setSelectedMethod('Net Banking')}>
              <FaUniversity className="payment-icon" />
              <p>Net Banking</p>
            </div>
            <div className="payment-method" onClick={() => setSelectedMethod('Cash on Delivery')}>
              <FaMoneyBillWave className="payment-icon" />
              <p>Cash on Delivery</p>
            </div>
          </div>

          <div className="payment-details">
            {selectedMethod === 'Credit/Debit Card' && (
              <div className="card-details">
                <h3>Enter Card Details</h3>
                <div className="input-with-icon">
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={paymentDetails.cardNumber}
                    onChange={handleCardNumberChange}
                  />
                  {getCardIcon()}
                </div>
                {cardError && <p className="error-message">{cardError}</p>}
                <input
                  type="text"
                  placeholder="CVV"
                  value={paymentDetails.cvv}
                  onChange={handleCvvChange}
                />
                {cvvError && <p className="error-message">{cvvError}</p>}
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  value={paymentDetails.expiry}
                  onChange={handleExpiryChange}
                />
                {expiryError && <p className="error-message">{expiryError}</p>}
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  value={paymentDetails.cardHolderName}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolderName: e.target.value })}
                />
              </div>
            )}


            {selectedMethod === 'UPI' && (
              <div className="upi-details">
                <h3>UPI Payment</h3>
                <select
                  value={paymentDetails.upiOption}
                  onChange={handleUpiOptionChange}
                >
                  <option value="">Select UPI App</option>
                  <option value="Google Pay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                  <option value="others">Others</option>
                </select>
                {upiIdField &&
                  <input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={paymentDetails.upiId}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, upiId: e.target.value })}
                  />
                }
              </div>
            )}

            {selectedMethod === 'Net Banking' && (
              <div className="net-banking-details">
                <h3>Net Banking</h3>
                <select
                  value={paymentDetails.bankOption}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, bankOption: e.target.value })}
                >
                  <option value="">Select Your Bank</option>
                  <option value="SBI">SBI</option>
                  <option value="HDFC">HDFC</option>
                  <option value="AXIS">AXIS</option>
                  <option value="IDFC">IDFC</option>
                  <option value="HSBC">HSBC</option>
                  <option value="ICIC">ICICI</option>
                  <option value="others">others</option>
                </select>
                <input
                  type="text"
                  placeholder="Account Number"
                  value={paymentDetails.accountNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="IFSC Code"
                  value={paymentDetails.ifsc}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, ifsc: e.target.value })}
                />
              </div>
            )}

            {selectedMethod === 'Cash on Delivery' && (
              <div className="cod-details">
                <h3>Cash on Delivery</h3>
                <input
                  type="text"
                  placeholder="Person Name"
                  value={paymentDetails.personName}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, personName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={paymentDetails.mobileNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, mobileNumber: e.target.value })}
                />
                <p>Delivery Date: <strong>{paymentDate}</strong></p>
              </div>
            )}
          </div>
          <button
            className={`confirm-button ${selectedMethod === '' || cardError !== '' || cvvError !== '' || expiryError !== '' ? 'disabled' : 'enabled'}`}
            onClick={handlePayment}
            disabled={selectedMethod === '' || cardError !== '' || cvvError !== '' || expiryError !== ''}
          >
            Proceed
          </button>


          <Tooltip id="master-card" />
          <Tooltip id="visa-card" />
          <Tooltip id="rupay-card" />
          <Tooltip id="amex-card" />
        </div>
      )}
    </>
  );
};

export default PaymentOptions;