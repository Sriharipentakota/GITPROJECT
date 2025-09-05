import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Check } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import { paymentMethods } from '../data/mockData';
import styles from './Payment.module.css';

const Payment = () => {
  const navigate = useNavigate();
  const { selectedBus, selectedSeats, passengerDetails, searchData, createBooking } = useBooking();
  const { user, isAuthenticated } = useAuth();
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [paymentData, setPaymentData] = useState({
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    bankCode: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!selectedBus || selectedSeats.length === 0 || passengerDetails.length === 0) {
    navigate('/');
    return null;
  }

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const taxes = Math.round(totalAmount * 0.05);
  const finalAmount = totalAmount + taxes;

  const handleInputChange = (field, value) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const booking = createBooking({
        method: selectedMethod,
        amount: finalAmount,
        transactionId: `TXN${Date.now()}`,
        status: 'completed',
        timestamp: new Date().toISOString(),
      });

      setIsProcessing(false);
      setShowSuccess(true);

      // Redirect to ticket page after success animation
      setTimeout(() => {
        navigate(`/ticket/${booking.id}`);
      }, 2000);
    }, 3000);
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'upi':
        return (
          <div className={styles.paymentForm}>
            <div className={styles.inputGroup}>
              <label>UPI ID</label>
              <input
                type="text"
                value={paymentData.upiId}
                onChange={(e) => handleInputChange('upiId', e.target.value)}
                placeholder="yourname@paytm"
                className="input"
                required
              />
            </div>
          </div>
        );

      case 'card':
        return (
          <div className={styles.paymentForm}>
            <div className={styles.inputGroup}>
              <label>Name on Card</label>
              <input
                type="text"
                value={paymentData.nameOnCard}
                onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                placeholder="John Doe"
                className="input"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Card Number</label>
              <input
                type="text"
                value={paymentData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className="input"
                required
              />
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label>Expiry Date</label>
                <input
                  type="text"
                  value={paymentData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  placeholder="MM/YY"
                  maxLength="5"
                  className="input"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>CVV</label>
                <input
                  type="text"
                  value={paymentData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  placeholder="123"
                  maxLength="3"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 'netbanking':
        return (
          <div className={styles.paymentForm}>
            <div className={styles.inputGroup}>
              <label>Select Your Bank</label>
              <select
                value={paymentData.bankCode}
                onChange={(e) => handleInputChange('bankCode', e.target.value)}
                className="input"
                required
              >
                <option value="">Choose your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
              </select>
            </div>
          </div>
        );

      default:
        return (
          <div className={styles.paymentForm}>
            <p className={styles.redirectMessage}>
              You will be redirected to complete the payment securely.
            </p>
          </div>
        );
    }
  };

  if (showSuccess) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successContent}>
          <div className={styles.successIcon}>
            <Check size={64} />
          </div>
          <h1>Payment Successful!</h1>
          <p>Your booking has been confirmed. Redirecting to your ticket...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.paymentPage}>
      <div className="container">
        <div className={styles.header}>
          <button
            className={`btn btn-secondary ${styles.backButton}`}
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div className={styles.securityBadge}>
            <Shield size={20} />
            <span>Secure Payment</span>
          </div>
        </div>

        <div className={styles.content}>
          {/* Payment Methods */}
          <div className={styles.paymentSection}>
            <div className={styles.paymentCard}>
              <h2>Choose Payment Method</h2>

              <div className={styles.paymentMethods}>
                {paymentMethods.map(method => (
                  <button
                    key={method.id}
                    className={`${styles.paymentMethodButton} ${selectedMethod === method.id ? styles.active : ''
                      }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className={styles.methodIcon}>{method.icon}</div>
                    <div className={styles.methodInfo}>
                      <span className={styles.methodName}>{method.name}</span>
                      <span className={styles.methodDescription}>{method.description}</span>
                      <span className={styles.methodProcessing}>Processing: {method.processing}</span>
                    </div>
                  </button>
                ))}
              </div>

              <form onSubmit={handlePayment} className={styles.paymentFormContainer}>
                {renderPaymentForm()}

                <button
                  type="submit"
                  className={`btn btn-success ${styles.payButton}`}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <span className="loading"></span>
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Pay ₹{finalAmount}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className={styles.orderSummary}>
            <div className={styles.summaryCard}>
              <h3>Booking Summary</h3>

              <div className={styles.journeyDetails}>
                <h4>{searchData.from.name} → {searchData.to.name}</h4>
                <p>{new Date(searchData.date).toLocaleDateString('en-IN', {
                  weekday: 'long',
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}</p>
              </div>

              <div className={styles.busDetails}>
                <h4>{selectedBus.operator}</h4>
                <p>{selectedBus.type}</p>
                <p>{selectedBus.departure} - {selectedBus.arrival}</p>
              </div>

              <div className={styles.passengerInfo}>
                <h4>Passengers</h4>
                {passengerDetails.map((passenger, index) => (
                  <div key={index} className={styles.passengerItem}>
                    <span>{passenger.name}</span>
                    <span>Seat: {selectedSeats[index]?.id}</span>
                  </div>
                ))}
              </div>

              <div className={styles.priceBreakdown}>
                <div className={styles.priceItem}>
                  <span>Base Fare</span>
                  <span>₹{totalAmount}</span>
                </div>
                <div className={styles.priceItem}>
                  <span>Taxes & Fees</span>
                  <span>₹{taxes}</span>
                </div>
                <div className={styles.totalPrice}>
                  <span>Total Amount</span>
                  <span>₹{finalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;