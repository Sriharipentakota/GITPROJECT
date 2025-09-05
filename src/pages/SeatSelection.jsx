import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { generateSeatLayout } from '../data/mockData';
import styles from './SeatSelection.module.css';

const SeatSelection = () => {
  const { busId } = useParams();
  const navigate = useNavigate();
  const { selectedBus, selectedSeats, selectSeat, searchData, updatePassengerDetails } = useBooking();
  const [seatLayout, setSeatLayout] = useState(null);
  const [showPassengerForm, setShowPassengerForm] = useState(false);
  const [passengerData, setPassengerData] = useState([]);

  useEffect(() => {
    if (!selectedBus) {
      navigate('/buses');
      return;
    }

    const layout = generateSeatLayout(selectedBus.type);
    const occupiedSeats = ['L3', 'L8', 'U5', 'S7', 'S12', 'S18']; // Mock occupied seats

    // Generate seat data with prices and availability
    const seatData = {};

    Object.entries(layout).forEach(([level, seats]) => {
      seats.forEach((row, rowIndex) => {
        row.forEach((seatId, colIndex) => {
          if (seatId) {
            const isOccupied = occupiedSeats.includes(seatId);
            const seatType = level === 'lower' || level === 'upper' ? 'sleeper' : 'seat';
            const price = selectedBus.seatTypes[seatType]?.price || selectedBus.price;

            seatData[seatId] = {
              id: seatId,
              type: seatType,
              level,
              row: rowIndex,
              col: colIndex,
              price,
              isOccupied,
              isSelected: false,
            };
          }
        });
      });
    });

    setSeatLayout({ layout, seatData });
  }, [selectedBus, navigate]);

  const handleSeatClick = (seatId) => {
    if (!seatLayout.seatData[seatId] || seatLayout.seatData[seatId].isOccupied) return;

    selectSeat(seatLayout.seatData[seatId]);
  };

  const handleProceedToPassengers = () => {
    if (selectedSeats.length !== searchData.passengers) {
      alert(`Please select exactly ${searchData.passengers} seat(s)`);
      return;
    }
    setShowPassengerForm(true);

    // Initialize passenger data
    const initialData = Array.from({ length: searchData.passengers }, (_, index) => ({
      id: index + 1,
      name: '',
      age: '',
      gender: 'male',
    }));
    setPassengerData(initialData);
  };

  const handlePassengerDataChange = (index, field, value) => {
    const updatedData = [...passengerData];
    updatedData[index][field] = value;
    setPassengerData(updatedData);
  };

  const handleProceedToPayment = () => {
    const isValid = passengerData.every(passenger =>
      passenger.name.trim() && passenger.age && passenger.gender
    );

    if (!isValid) {
      alert('Please fill all passenger details');
      return;
    }

    updatePassengerDetails(passengerData);
    navigate('/payment');
  };

  if (!selectedBus || !seatLayout) {
    return <div>Loading...</div>;
  }

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const renderSeatLayout = () => {
    const { layout, seatData } = seatLayout;

    return (
      <div className={styles.seatMap}>
        {Object.entries(layout).map(([level, seats]) => (
          <div key={level} className={styles.seatLevel}>
            <h4 className={styles.levelTitle}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </h4>
            <div className={styles.seatGrid}>
              {seats.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.seatRow}>
                  {row.map((seatId, colIndex) => {
                    if (!seatId) {
                      return <div key={colIndex} className={styles.aisle}></div>;
                    }

                    const seat = seatData[seatId];
                    const isSelected = selectedSeats.some(s => s.id === seatId);

                    return (
                      <button
                        key={seatId}
                        type="button"
                        className={`${styles.seat} ${seat.isOccupied ? styles.occupied :
                            isSelected ? styles.selected :
                              styles.available
                          }`}
                        onClick={() => handleSeatClick(seatId)}
                        disabled={seat.isOccupied}
                        title={`${seatId} - ₹${seat.price}`}
                      >
                        {seatId}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.seatSelectionPage}>
      <div className="container">
        <div className={styles.header}>
          <button
            className={`btn btn-secondary ${styles.backButton}`}
            onClick={() => navigate('/buses')}
          >
            <ArrowLeft size={20} />
            Back to Buses
          </button>

          <div className={styles.busInfo}>
            <h1>{selectedBus.operator}</h1>
            <p>{selectedBus.type} • {searchData.from.name} → {searchData.to.name}</p>
          </div>
        </div>

        {!showPassengerForm ? (
          <div className={styles.content}>
            {/* Seat Selection */}
            <div className={styles.seatSelectionContainer}>
              <div className={styles.seatSelectionHeader}>
                <h2>Select Your Seats</h2>
                <div className={styles.legend}>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendSeat} ${styles.available}`}></div>
                    <span>Available</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendSeat} ${styles.selected}`}></div>
                    <span>Selected</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendSeat} ${styles.occupied}`}></div>
                    <span>Occupied</span>
                  </div>
                </div>
              </div>

              {renderSeatLayout()}
            </div>

            {/* Booking Summary */}
            <div className={styles.bookingSummary}>
              <div className={styles.summaryCard}>
                <h3>Booking Summary</h3>

                <div className={styles.selectedSeatsInfo}>
                  <h4>Selected Seats ({selectedSeats.length})</h4>
                  {selectedSeats.map(seat => (
                    <div key={seat.id} className={styles.selectedSeatItem}>
                      <span>{seat.id}</span>
                      <span>₹{seat.price}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.totalAmount}>
                  <span>Total Amount</span>
                  <span>₹{totalAmount}</span>
                </div>

                <button
                  className={`btn btn-success ${styles.proceedButton}`}
                  onClick={handleProceedToPassengers}
                  disabled={selectedSeats.length === 0}
                >
                  <Users size={20} />
                  Add Passenger Details
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.passengerForm}>
            <div className={styles.passengerFormHeader}>
              <h2>Passenger Details</h2>
              <p>Please provide details for all passengers</p>
            </div>

            <div className={styles.passengerList}>
              {passengerData.map((passenger, index) => (
                <div key={index} className={styles.passengerCard}>
                  <h4>Passenger {index + 1} - Seat {selectedSeats[index]?.id}</h4>

                  <div className={styles.passengerInputs}>
                    <div className={styles.inputGroup}>
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={passenger.name}
                        onChange={(e) => handlePassengerDataChange(index, 'name', e.target.value)}
                        placeholder="Enter full name"
                        className="input"
                        required
                      />
                    </div>

                    <div className={styles.inputRow}>
                      <div className={styles.inputGroup}>
                        <label>Age</label>
                        <input
                          type="number"
                          value={passenger.age}
                          onChange={(e) => handlePassengerDataChange(index, 'age', e.target.value)}
                          placeholder="Age"
                          min="1"
                          max="100"
                          className="input"
                          required
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label>Gender</label>
                        <select
                          value={passenger.gender}
                          onChange={(e) => handlePassengerDataChange(index, 'gender', e.target.value)}
                          className="input"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.formActions}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPassengerForm(false)}
              >
                Back to Seat Selection
              </button>
              <button
                className="btn btn-success"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment - ₹{totalAmount}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;