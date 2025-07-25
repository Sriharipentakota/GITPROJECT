import React from 'react';
import { useAppContext } from '../../context/AppContext';

const BookingsPage = () => {
  const { bookings } = useAppContext();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
        <div className="text-sm text-gray-500">
          {bookings.length} total bookings
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-500 mb-4">Start learning by booking your first lesson.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {booking.skillName}
                    </h3>
                    <p className="text-gray-600">with {booking.studentName}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(booking.amount)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {booking.duration} minutes
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{formatDate(booking.date)}</span>
                <div className="flex space-x-2">
                  {booking.status === 'upcoming' && (
                    <>
                      <button className="text-primary-600 hover:text-primary-500">
                        Reschedule
                      </button>
                      <button className="text-red-600 hover:text-red-500">
                        Cancel
                      </button>
                    </>
                  )}
                  {booking.status === 'completed' && (
                    <button className="text-primary-600 hover:text-primary-500">
                      Leave Review
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsPage;