export const cities = [
  { id: 1, name: 'Mumbai', state: 'Maharashtra' },
  { id: 2, name: 'Delhi', state: 'Delhi' },
  { id: 3, name: 'Bangalore', state: 'Karnataka' },
  { id: 4, name: 'Chennai', state: 'Tamil Nadu' },
  { id: 5, name: 'Kolkata', state: 'West Bengal' },
  { id: 6, name: 'Hyderabad', state: 'Telangana' },
  { id: 7, name: 'Pune', state: 'Maharashtra' },
  { id: 8, name: 'Ahmedabad', state: 'Gujarat' },
  { id: 9, name: 'Jaipur', state: 'Rajasthan' },
  { id: 10, name: 'Surat', state: 'Gujarat' },
  { id: 11, name: 'Lucknow', state: 'Uttar Pradesh' },
  { id: 12, name: 'Kanpur', state: 'Uttar Pradesh' },
];

export const buses = [
  {
    id: 1,
    operator: 'VRL Travels',
    type: 'AC Sleeper',
    departure: '22:00',
    arrival: '06:00',
    duration: '8h 0m',
    rating: 4.2,
    reviews: 1245,
    price: 1200,
    amenities: ['WiFi', 'Charging Point', 'Water Bottle', 'Blanket'],
    seatTypes: {
      sleeper: { available: 15, price: 1200 },
      seat: { available: 8, price: 800 },
    },
    pickupPoints: ['Andheri West', 'Borivali', 'Thane'],
    dropPoints: ['Majestic', 'Electronic City', 'Whitefield'],
    cancellationPolicy: 'Free cancellation till 6 hours before departure',
  },
  {
    id: 2,
    operator: 'SRS Travels',
    type: 'Volvo Multi-Axle',
    departure: '23:30',
    arrival: '07:30',
    duration: '8h 0m',
    rating: 4.5,
    reviews: 892,
    price: 1500,
    amenities: ['WiFi', 'Charging Point', 'Reading Light', 'Personal Entertainment'],
    seatTypes: {
      pushback: { available: 20, price: 1500 },
      sleeper: { available: 5, price: 1800 },
    },
    pickupPoints: ['Bandra Kurla Complex', 'Powai', 'Mulund'],
    dropPoints: ['Silk Board', 'BTM Layout', 'Koramangala'],
    cancellationPolicy: 'Free cancellation till 2 hours before departure',
  },
  {
    id: 3,
    operator: 'RedBus Express',
    type: 'AC Seater',
    departure: '06:00',
    arrival: '14:30',
    duration: '8h 30m',
    rating: 4.0,
    reviews: 567,
    price: 900,
    amenities: ['WiFi', 'Charging Point', 'Water Bottle'],
    seatTypes: {
      seat: { available: 25, price: 900 },
    },
    pickupPoints: ['Dadar', 'Kurla', 'Vikhroli'],
    dropPoints: ['Shivaji Nagar', 'Koramangala', 'Banashankari'],
    cancellationPolicy: 'Partial refund available till 12 hours before departure',
  },
];

export const generateSeatLayout = (busType) => {
  const layouts = {
    'AC Sleeper': {
      lower: [
        ['L1', 'L2', null, 'L3'],
        ['L4', 'L5', null, 'L6'],
        ['L7', 'L8', null, 'L9'],
        ['L10', 'L11', null, 'L12'],
        ['L13', 'L14', null, 'L15'],
      ],
      upper: [
        ['U1', 'U2', null, 'U3'],
        ['U4', 'U5', null, 'U6'],
        ['U7', 'U8', null, 'U9'],
        ['U10', 'U11', null, 'U12'],
        ['U13', 'U14', null, 'U15'],
      ]
    },
    'Volvo Multi-Axle': {
      seats: [
        ['S1', 'S2', null, 'S3', 'S4'],
        ['S5', 'S6', null, 'S7', 'S8'],
        ['S9', 'S10', null, 'S11', 'S12'],
        ['S13', 'S14', null, 'S15', 'S16'],
        ['S17', 'S18', null, 'S19', 'S20'],
      ]
    },
    'AC Seater': {
      seats: [
        ['S1', 'S2', null, 'S3', 'S4'],
        ['S5', 'S6', null, 'S7', 'S8'],
        ['S9', 'S10', null, 'S11', 'S12'],
        ['S13', 'S14', null, 'S15', 'S16'],
        ['S17', 'S18', null, 'S19', 'S20'],
        ['S21', 'S22', null, 'S23', 'S24'],
        ['S25', null, null, null, null],
      ]
    }
  };

  return layouts[busType] || layouts['AC Seater'];
};

export const paymentMethods = [
  {
    id: 'upi',
    name: 'UPI',
    icon: '📱',
    description: 'Pay using UPI apps like GPay, PhonePe, Paytm',
    processing: 'Instant',
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: '🏦',
    description: 'Pay using your bank account',
    processing: '2-5 minutes',
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: '💳',
    description: 'Pay using your cards',
    processing: 'Instant',
  },
  {
    id: 'wallet',
    name: 'Digital Wallet',
    icon: '👛',
    description: 'Paytm, Mobikwik, Amazon Pay',
    processing: 'Instant',
  },
  {
    id: 'bnpl',
    name: 'Buy Now Pay Later',
    icon: '⏰',
    description: 'EMI options available',
    processing: 'Instant',
  },
];