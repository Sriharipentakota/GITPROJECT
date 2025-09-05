import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BookingProvider } from './contexts/BookingContext';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import BusList from './pages/BusList';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
import Ticket from './pages/Ticket';
import Profile from './pages/Profile';
import BookingHistory from './pages/BookingHistory';
// import './App.css';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buses" element={<BusList />} />
                <Route path="/seats/:busId" element={<SeatSelection />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/ticket/:bookingId" element={<Ticket />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bookings" element={<BookingHistory />} />
              </Routes>
            </main>
          </div>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;