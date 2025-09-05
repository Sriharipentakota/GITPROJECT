import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Eye, X, RefreshCw } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';
import styles from './BookingHistory.module.css';

const BookingHistory = () => {
  const navigate = useNavigate();
  const { bookings, cancelBooking } = useBooking();
  const { isAuthenticated } = useAuth();
  const [filter, setFilter] = useState('all');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  const handleCancelBooking = () => {
    if (bookingToCancel) {
      cancelBooking(bookingToCancel.id);
      setShowCancelModal(false);
      setBookingToCancel(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const canCancel = (booking) => {
    const journeyDate = new Date(booking.date);
    const now = new Date();
    const hoursUntilJourney = (journeyDate - now) / (1000 * 60 * 60);
    return booking.status === 'confirmed' && hoursUntilJourney > 2;
  };

  if (bookings.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className="container">
          <div className={styles.emptyContent}>
            <div className={styles.emptyIcon}>🚌</div>
            <h1>No Bookings Yet</h1>
            <p>You haven't made any bus bookings. Start your journey today!</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              Book Your First Trip
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bookingHistoryPage}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h1>My Bookings</h1>
            <p>Manage and track all your bus bookings</p>
          </div>
          
          <div className={styles.filterTabs}>
            {[
              { value: 'all', label: 'All Bookings' },
              { value: 'confirmed', label: 'Confirmed' },
              { value: 'cancelled', label: 'Cancelled' },
            ].map(tab => (
              <button
                key={tab.value}
                className={`${styles.filterTab} ${filter === tab.value ? styles.active : ''}`}
                onClick={() => setFilter(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.bookingsList}>
          {filteredBookings.map(booking => (
            <div key={booking.id} className={`card ${styles.bookingCard}`}>
              <div className={styles.bookingHeader}>
                <div className={styles.routeInfo}>
                  <h3>{booking.from.name} → {booking.to.name}</h3>
                  <p>{formatDate(booking.date)} • {booking.bus.operator}</p>
                </div>
                <span className={`${styles.statusBadge} ${styles[booking.status]}`}>
                  {booking.status}
                </span>
              </div>

              <div className={styles.bookingDetails}>
                <div className={styles.timeInfo}>
                  <div className={styles.timeSlot}>
                    <Clock size={16} />
                    <span>{booking.bus.departure} - {booking.bus.arrival}</span>
                  </div>
                  <div className={styles.duration}>
                    {booking.bus.duration}
                  </div>
                </div>

                <div className={styles.passengerSeats}>
                  <span>{booking.passengers.length} Passenger{booking.passengers.length > 1 ? 's' : ''}</span>
                  <span>Seats: {booking.seats.map(s => s.id).join(', ')}</span>
                </div>
              </div>

              <div className={styles.bookingFooter}>
                <div className={styles.priceInfo}>
                  <span className={styles.totalAmount}>₹{booking.payment.amount}</span>
                  <span className={styles.pnr}>PNR: {booking.pnr}</span>
                </div>
                
                <div className={styles.actions}>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/ticket/${booking.id}`)}
                  >
                    <Eye size={16} />
                    View Ticket
                  </button>
                  
                  {canCancel(booking) && (
                    <button
                      className={styles.cancelButton}
                      onClick={() => {
                        setBookingToCancel(booking);
                        setShowCancelModal(true);
                      }}
                    >
                      <X size={16} />
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className={styles.modalOverlay} onClick={() => setShowCancelModal(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Cancel Booking</h3>
                <button 
                  className={styles.modalClose}
                  onClick={() => setShowCancelModal(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className={styles.modalContent}>
                <p>Are you sure you want to cancel this booking?</p>
                {bookingToCancel && (
                  <div className={styles.bookingInfo}>
                    <p><strong>Route:</strong> {bookingToCancel.from.name} → {bookingToCancel.to.name}</p>
                    <p><strong>Date:</strong> {formatDate(bookingToCancel.date)}</p>
                    <p><strong>PNR:</strong> {bookingToCancel.pnr}</p>
                  </div>
                )}
                <p className={styles.refundInfo}>
                  Refund amount will be processed according to the cancellation policy. 
                  You will receive the refund in 3-5 business days.
                </p>
              </div>
              
              <div className={styles.modalActions}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowCancelModal(false)}
                >
                  Keep Booking
                </button>
                <button 
                  className={styles.confirmCancelButton}
                  onClick={handleCancelBooking}
                >
                  <RefreshCw size={16} />
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;