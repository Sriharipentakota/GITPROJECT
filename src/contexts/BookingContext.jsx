import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: null,
    passengers: 1,
  });
  
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [bookings, setBookings] = useState(() => {
    const stored = localStorage.getItem('busapp_bookings');
    return stored ? JSON.parse(stored) : [];
  });

  const updateSearchData = (data) => {
    setSearchData(prev => ({ ...prev, ...data }));
  };

  const selectBus = (bus) => {
    setSelectedBus(bus);
  };

  const selectSeat = (seat) => {
    setSelectedSeats(prev => {
      const isAlreadySelected = prev.find(s => s.id === seat.id);
      if (isAlreadySelected) {
        return prev.filter(s => s.id !== seat.id);
      }
      if (prev.length >= searchData.passengers) {
        return prev;
      }
      return [...prev, seat];
    });
  };

  const updatePassengerDetails = (details) => {
    setPassengerDetails(details);
  };

  const createBooking = (paymentData) => {
    const booking = {
      id: `BUS${Date.now()}`,
      ...searchData,
      bus: selectedBus,
      seats: selectedSeats,
      passengers: passengerDetails,
      payment: paymentData,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      totalAmount: selectedSeats.reduce((sum, seat) => sum + seat.price, 0),
      pnr: `PNR${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    };

    const updatedBookings = [...bookings, booking];
    setBookings(updatedBookings);
    localStorage.setItem('busapp_bookings', JSON.stringify(updatedBookings));
    
    return booking;
  };

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: 'cancelled', cancelDate: new Date().toISOString() }
        : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('busapp_bookings', JSON.stringify(updatedBookings));
  };

  const resetBooking = () => {
    setSelectedBus(null);
    setSelectedSeats([]);
    setPassengerDetails([]);
  };

  const value = {
    searchData,
    selectedBus,
    selectedSeats,
    passengerDetails,
    bookings,
    updateSearchData,
    selectBus,
    selectSeat,
    updatePassengerDetails,
    createBooking,
    cancelBooking,
    resetBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};