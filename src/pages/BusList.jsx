import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Star, Wifi, Zap, Droplets, Shield } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { buses } from '../data/mockData';
import styles from './BusList.module.css';

const BusList = () => {
  const navigate = useNavigate();
  const { searchData, selectBus } = useBooking();
  const [filteredBuses, setFilteredBuses] = useState(buses);
  const [sortBy, setSortBy] = useState('departure');
  const [filters, setFilters] = useState({
    busType: [],
    amenities: [],
    priceRange: [500, 2000],
    rating: 0,
  });

  useEffect(() => {
    let filtered = [...buses];

    // Apply filters
    if (filters.busType.length > 0) {
      filtered = filtered.filter(bus => filters.busType.includes(bus.type));
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter(bus =>
        filters.amenities.every(amenity => bus.amenities.includes(amenity))
      );
    }

    filtered = filtered.filter(bus =>
      bus.price >= filters.priceRange[0] && bus.price <= filters.priceRange[1]
    );

    if (filters.rating > 0) {
      filtered = filtered.filter(bus => bus.rating >= filters.rating);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return a.duration.localeCompare(b.duration);
        default: // departure
          return a.departure.localeCompare(b.departure);
      }
    });

    setFilteredBuses(filtered);
  }, [filters, sortBy]);

  const handleBusSelect = (bus) => {
    selectBus(bus);
    navigate(`/seats/${bus.id}`);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  const amenityIcons = {
    'WiFi': <Wifi size={16} />,
    'Charging Point': <Zap size={16} />,
    'Water Bottle': <Droplets size={16} />,
    'Reading Light': '💡',
    'Blanket': '🛏️',
    'Personal Entertainment': '📺',
  };

  if (!searchData.from || !searchData.to) {
    navigate('/');
    return null;
  }

  return (
    <div className={styles.busListPage}>
      <div className="container">
        {/* Search Summary */}
        <div className={styles.searchSummary}>
          <div className={styles.routeInfo}>
            <h1>{searchData.from.name} → {searchData.to.name}</h1>
            <p>{formatDate(searchData.date)} • {searchData.passengers} {searchData.passengers === 1 ? 'Passenger' : 'Passengers'}</p>
          </div>
        </div>

        <div className={styles.content}>
          {/* Filters Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Sort By</h3>
              <div className={styles.sortOptions}>
                {[
                  { value: 'departure', label: 'Departure Time' },
                  { value: 'price', label: 'Price (Low to High)' },
                  { value: 'rating', label: 'Rating' },
                  { value: 'duration', label: 'Duration' },
                ].map(option => (
                  <button
                    key={option.value}
                    className={`${styles.sortButton} ${sortBy === option.value ? styles.active : ''}`}
                    onClick={() => setSortBy(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3>Bus Type</h3>
              {['AC Sleeper', 'Volvo Multi-Axle', 'AC Seater'].map(type => (
                <label key={type} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.busType.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters(prev => ({
                          ...prev,
                          busType: [...prev.busType, type]
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          busType: prev.busType.filter(t => t !== type)
                        }));
                      }
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className={styles.filterSection}>
              <h3>Amenities</h3>
              {['WiFi', 'Charging Point', 'Water Bottle', 'Reading Light'].map(amenity => (
                <label key={amenity} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters(prev => ({
                          ...prev,
                          amenities: [...prev.amenities, amenity]
                        }));
                      } else {
                        setFilters(prev => ({
                          ...prev,
                          amenities: prev.amenities.filter(a => a !== amenity)
                        }));
                      }
                    }}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </aside>

          {/* Bus List */}
          <main className={styles.busListContainer}>
            <div className={styles.resultsHeader}>
              <h2>{filteredBuses.length} buses found</h2>
            </div>

            <div className={styles.busList}>
              {filteredBuses.map(bus => (
                <div key={bus.id} className={`card ${styles.busCard}`}>
                  <div className={styles.busHeader}>
                    <div className={styles.operatorInfo}>
                      <h3>{bus.operator}</h3>
                      <span className={styles.busType}>{bus.type}</span>
                    </div>
                    <div className={styles.rating}>
                      <Star size={16} fill="currentColor" />
                      <span>{bus.rating}</span>
                      <span className={styles.reviewCount}>({bus.reviews})</span>
                    </div>
                  </div>

                  <div className={styles.journeyInfo}>
                    <div className={styles.timeInfo}>
                      <div className={styles.time}>
                        <span className={styles.timeValue}>{bus.departure}</span>
                        <span className={styles.location}>{searchData.from.name}</span>
                      </div>
                      <div className={styles.duration}>
                        <Clock size={16} />
                        <span>{bus.duration}</span>
                      </div>
                      <div className={styles.time}>
                        <span className={styles.timeValue}>{bus.arrival}</span>
                        <span className={styles.location}>{searchData.to.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.amenities}>
                    {bus.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className={styles.amenity}>
                        {amenityIcons[amenity] || <Shield size={16} />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.busFooter}>
                    <div className={styles.priceInfo}>
                      <span className={styles.priceLabel}>Starting from</span>
                      <span className={styles.price}>₹{bus.price}</span>
                    </div>
                    <div className={styles.seatAvailability}>
                      {Object.entries(bus.seatTypes).map(([type, info]) => (
                        <span key={type} className={styles.seatType}>
                          {info.available} {type}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBusSelect(bus)}
                    >
                      Select Seats
                    </button>
                  </div>

                  <div className={styles.pickupDropInfo}>
                    <div>
                      <h4>Pickup Points</h4>
                      <p>{bus.pickupPoints.join(', ')}</p>
                    </div>
                    <div>
                      <h4>Drop Points</h4>
                      <p>{bus.dropPoints.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BusList;