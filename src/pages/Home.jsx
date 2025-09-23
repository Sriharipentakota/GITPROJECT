import React, { useState } from 'react';
import AuthModal from '../components/Auth/AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { useBooking } from '../contexts/BookingContext';
import { cities } from '../data/mockData';
import styles from './Home.module.css';
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { searchData, updateSearchData } = useBooking();
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  // Sync input fields with selected cities in searchData
  React.useEffect(() => {
    setFromQuery(searchData.from?.name || '');
  }, [searchData.from]);

  React.useEffect(() => {
    setToQuery(searchData.to?.name || '');
  }, [searchData.to]);


  const filteredFromCities = cities.filter(city =>
    city.name.toLowerCase().includes(fromQuery.toLowerCase())
  );

  const filteredToCities = cities.filter(city =>
    city.name.toLowerCase().includes(toQuery.toLowerCase()) && city.id !== searchData.from?.id
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchData.from || !searchData.to || !searchData.date) {
      alert('Please fill all required fields');
      return;
    }
    if (searchData.from.id === searchData.to.id) {
      alert('Departure and destination cities should not be the same');
      return;
    }
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    navigate('/buses');
  };

  const handleCitySelect = (city, type) => {
    if (type === 'from') {
      if (searchData.to && city.id === searchData.to.id) {
        alert('Departure and destination cities should not be the same');
        return;
      }
      updateSearchData({ from: city });
      setFromQuery(city.name);
      setShowFromDropdown(false);
    } else if (type === 'to') {
      if (searchData.from && city.id === searchData.from.id) {
        alert('Departure and destination cities should not be the same');
        return;
      }
      updateSearchData({ to: city });
      setToQuery(city.name);
      setShowToDropdown(false);
    }
  };

  const swapCities = () => {
    const { from, to } = searchData;
    
    // Swap the cities in searchData
    updateSearchData({ from: to, to: from });
    
    // Swap the input field values
    const tempFromQuery = fromQuery;
    setFromQuery(toQuery);
    setToQuery(tempFromQuery);
    
    // Close any open dropdowns
    setShowFromDropdown(false);
    setShowToDropdown(false);
  };

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>Book Your Perfect Journey</h1>
              <p>Travel comfortably with India's most trusted bus booking platform. Compare prices, choose your seat, and travel with confidence.</p>
            </div>

            {/* Search Form */}
            <div className={styles.searchCard}>
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <div className={styles.searchRow}>
                  {/* From City */}
                  <div className={styles.inputWrapper}>
                    <label className={styles.label}>
                      <MapPin size={16} />
                      From
                    </label>
                    <div className={styles.cityInput}>
                      <input
                        type="text"
                        value={fromQuery}
                        onChange={(e) => {
                          setFromQuery(e.target.value);
                          setShowFromDropdown(true);
                        }}
                        onFocus={() => setShowFromDropdown(true)}
                        onBlur={() => setTimeout(() => setShowFromDropdown(false), 100)}
                        placeholder="Departure city"
                        className="input"
                      />
                      {showFromDropdown && (
                        <div className={styles.dropdown}>
                          {filteredFromCities.map(city => (
                            <button
                              key={city.id}
                              type="button"
                              className={styles.cityOption}
                              onMouseDown={() => handleCitySelect(city, 'from')}
                            >
                              <span className={styles.cityName}>{city.name}</span>
                              <span className={styles.stateName}>{city.state}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Swap Button */}
                  <button
                    type="button"
                    className={styles.swapButton}
                    onClick={swapCities}
                  >
                    <ArrowRight size={20} />
                  </button>

                  {/* To City */}
                  <div className={styles.inputWrapper}>
                    <label className={styles.label}>
                      <MapPin size={16} />
                      To
                    </label>
                    <div className={styles.cityInput}>
                      <input
                        type="text"
                        value={toQuery}
                        onChange={(e) => {
                          setToQuery(e.target.value);
                          setShowToDropdown(true);
                        }}
                        onFocus={() => setShowToDropdown(true)}
                        onBlur={() => setTimeout(() => setShowToDropdown(false), 100)}
                        placeholder="Destination city"
                        className="input"
                      />
                      {showToDropdown && (
                        <div className={styles.dropdown}>
                          {filteredToCities.map(city => (
                            <button
                              key={city.id}
                              type="button"
                              className={styles.cityOption}
                              onMouseDown={() => handleCitySelect(city, 'to')}
                            >
                              <span className={styles.cityName}>{city.name}</span>
                              <span className={styles.stateName}>{city.state}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.searchRow}>
                  {/* Date */}
                  <div className={styles.inputWrapper}>
                    <label className={styles.label}>
                      <Calendar size={16} />
                      Journey Date
                    </label>
                    <DatePicker
                      selected={searchData.date}
                      onChange={(date) => updateSearchData({ date })}
                      minDate={new Date()}
                      dateFormat="dd MMM yyyy"
                      placeholderText="Select date"
                      className="input"
                    />
                  </div>

                  {/* Passengers */}
                  <div className={styles.inputWrapper}>
                    <label className={styles.label}>
                      <Users size={16} />
                      Passengers
                    </label>
                    <select
                      value={searchData.passengers}
                      onChange={(e) => updateSearchData({ passengers: Number(e.target.value) })}
                      className="input"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className={styles.searchButtonWrapper}>
                    <button type="submit" className={`btn btn-primary ${styles.searchButton}`}>
                      <Search size={20} />
                      <span>Search Buses</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <h2>Why Choose BusGo?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚌</div>
              <h3>Wide Network</h3>
              <p>Access to 1000+ buses across major routes in India</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💺</div>
              <h3>Choose Your Seat</h3>
              <p>Interactive seat selection with real-time availability</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💳</div>
              <h3>Secure Payments</h3>
              <p>Multiple payment options with bank-level security</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Digital Tickets</h3>
              <p>Instant ticket generation with PDF download</p>
            </div>
          </div>
        </div>
      </section>
      {/* Auth Modal for login/signup */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Home;