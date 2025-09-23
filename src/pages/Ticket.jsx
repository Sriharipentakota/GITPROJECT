import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, ArrowLeft, MapPin, Clock, CreditCard, X } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './Ticket.module.css';

const Ticket = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const { bookings, cancelBooking } = useBooking();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const ticketRef = useRef(null);

  const booking = bookings.find(b => b.id === bookingId);

  if (!booking) {
    return (
      <div className={styles.errorPage}>
        <div className="container">
          <h1>Booking Not Found</h1>
          <p>The requested booking could not be found.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleDownloadPDF = async () => {
    if (!ticketRef.current) return;

    setIsGeneratingPDF(true);
    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`BusGo-Ticket-${booking.id}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const canCancelBooking = () => {
    if (booking.status !== 'confirmed') return false;
    
    const journeyDateTime = new Date(`${booking.date}T${booking.bus.departure}`);
    const currentTime = new Date();
    const timeDifference = journeyDateTime - currentTime;
    const hoursUntilJourney = timeDifference / (1000 * 60 * 60);
    
    return hoursUntilJourney > 2;
  };

  const handleCancelBooking = () => {
    cancelBooking(booking.id);
    setShowCancelModal(false);
    alert('Your booking has been cancelled successfully. Refund will be processed within 5-7 business days.');
    navigate('/bookings');
  };

  return (
    <div className={styles.ticketPage}>
      <div className="container">
        <div className={styles.header}>
          <button
            className={`btn btn-secondary ${styles.backButton}`}
            onClick={() => navigate('/bookings')}
          >
            <ArrowLeft size={20} />
            Back to Bookings
          </button>

          <button
            className={`btn btn-primary ${styles.downloadButton}`}
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
          >
            {isGeneratingPDF ? (
              <>
                <span className="loading"></span>
                Generating...
              </>
            ) : (
              <>
                <Download size={20} />
                Download PDF
              </>
            )}
          </button>

          {canCancelBooking() && (
            <button
              className={`btn btn-danger ${styles.cancelButton}`}
              onClick={() => setShowCancelModal(true)}
            >
              <X size={20} />
              Cancel Ticket
            </button>
          )}
        </div>

        <div className={styles.ticketContainer} ref={ticketRef}>
          <div className={styles.ticket}>
            {/* Ticket Header */}
            <div className={styles.ticketHeader}>
              <div className={styles.brandInfo}>
                <h1>BusGo</h1>
                <span className={styles.ticketType}>E-Ticket</span>
              </div>
              <div className={styles.bookingStatus}>
                <span className={`${styles.statusBadge} ${styles[booking.status]}`}>
                  {booking.status.toUpperCase()}
                </span>
                <span className={styles.pnr}>PNR: {booking.pnr}</span>
              </div>
            </div>

            {/* Journey Information */}
            <div className={styles.journeySection}>
              <div className={styles.routeInfo}>
                <div className={styles.location}>
                  <MapPin size={24} />
                  <div>
                    <h3>{booking.from.name}</h3>
                    <p>{formatTime(booking.bus.departure)}</p>
                  </div>
                </div>

                <div className={styles.journeyLine}>
                  <div className={styles.line}></div>
                  <div className={styles.duration}>
                    <Clock size={16} />
                    <span>{booking.bus.duration}</span>
                  </div>
                </div>

                <div className={styles.location}>
                  <MapPin size={24} />
                  <div>
                    <h3>{booking.to.name}</h3>
                    <p>{formatTime(booking.bus.arrival)}</p>
                  </div>
                </div>
              </div>

              <div className={styles.dateInfo}>
                <h4>Journey Date</h4>
                <p>{formatDate(booking.date)}</p>
              </div>
            </div>

            {/* Bus Information */}
            <div className={styles.busSection}>
              <div className={styles.busInfo}>
                <h4>Bus Details</h4>
                <p className={styles.operatorName}>{booking.bus.operator}</p>
                <p className={styles.busType}>{booking.bus.type}</p>
              </div>

              <div className={styles.seatInfo}>
                <h4>Seat Numbers</h4>
                <div className={styles.seatNumbers}>
                  {booking.seats.map(seat => (
                    <span key={seat.id} className={styles.seatNumber}>
                      {seat.id}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Passenger Information */}
            <div className={styles.passengerSection}>
              <h4>Passenger Details</h4>
              <div className={styles.passengerList}>
                {booking.passengers.map((passenger, index) => (
                  <div key={index} className={styles.passengerCard}>
                    <div className={styles.passengerInfo}>
                      <span className={styles.passengerName}>{passenger.name}</span>
                      <span className={styles.passengerMeta}>
                        {passenger.gender}, {passenger.age} years
                      </span>
                    </div>
                    <span className={styles.assignedSeat}>
                      Seat: {booking.seats[index]?.id}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className={styles.paymentSection}>
              <h4>Payment Details</h4>
              <div className={styles.paymentInfo}>
                <div className={styles.paymentRow}>
                  <span>Base Fare</span>
                  <span>₹{booking.totalAmount}</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Taxes & Fees</span>
                  <span>₹{Math.round(booking.totalAmount * 0.05)}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Total Paid</span>
                  <span>₹{booking.payment.amount}</span>
                </div>
                <div className={styles.paymentMethod}>
                  <CreditCard size={16} />
                  <span>Paid via {booking.payment.method.toUpperCase()}</span>
                  <span className={styles.transactionId}>
                    {booking.payment.transactionId}
                  </span>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className={styles.importantInfo}>
              <h4>Important Information</h4>
              <ul>
                <li>Please carry a valid ID proof during travel</li>
                <li>Report to the boarding point 15 minutes before departure</li>
                <li>This is a digital ticket - no need to print</li>
                <li>Cancellation policy: {booking.bus.cancellationPolicy}</li>
              </ul>
            </div>

            {/* Footer */}
            <div className={styles.ticketFooter}>
              <div className={styles.bookingMeta}>
                <span>Booking ID: {booking.id}</span>
                <span>Booked on: {new Date(booking.bookingDate).toLocaleDateString('en-IN')}</span>
              </div>
              <div className={styles.contactInfo}>
                <p>For support: support@busgo.com | 1800-123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Book Another Ticket
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/bookings')}>
            View All Bookings
          </button>
        </div>

        {/* Cancel Confirmation Modal */}
        {showCancelModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3>Cancel Booking</h3>
                <button 
                  className={styles.closeButton}
                  onClick={() => setShowCancelModal(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.cancelWarning}>
                  <p><strong>Are you sure you want to cancel this booking?</strong></p>
                  <div className={styles.bookingDetails}>
                    <p><strong>PNR:</strong> {booking.pnr}</p>
                    <p><strong>Route:</strong> {booking.from.name} → {booking.to.name}</p>
                    <p><strong>Date:</strong> {formatDate(booking.date)}</p>
                    <p><strong>Seats:</strong> {booking.seats.map(seat => seat.id).join(', ')}</p>
                  </div>
                  
                  <div className={styles.refundInfo}>
                    <h4>Refund Information:</h4>
                    <ul>
                      <li>Refund amount: ₹{Math.round(booking.payment.amount * 0.85)} (85% of paid amount)</li>
                      <li>Processing time: 5-7 business days</li>
                      <li>Refund will be credited to original payment method</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={styles.modalFooter}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowCancelModal(false)}
                >
                  Keep Booking
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={handleCancelBooking}
                >
                  Confirm Cancellation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticket;