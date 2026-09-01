import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SkillDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { skills, isAuthenticated, addNotification } = useAppContext();
  const [skill, setSkill] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  useEffect(() => {
    const foundSkill = skills.find(s => s.id === id);
    if (foundSkill) {
      setSkill(foundSkill);
    }
  }, [id, skills]);

  const handleBookLesson = () => {
    if (!isAuthenticated) {
      addNotification('Please log in to book a lesson', 'warning');
      navigate('/login');
      return;
    }

    if (!selectedTime) {
      addNotification('Please select a time slot', 'warning');
      return;
    }

    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    addNotification('Lesson booked successfully! You will receive a confirmation email.', 'success');
    setShowBookingModal(false);
    navigate('/bookings');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">⭐</span>);
    }
    
    return stars;
  };

  if (!skill) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Skill not found</h3>
          <p className="text-gray-500 mb-4">The skill you're looking for doesn't exist.</p>
          <Link to="/skills" className="btn-primary">
            Browse Skills
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <img
          src={skill.thumbnail}
          alt={skill.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {skill.level}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {skill.duration} minutes
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {skill.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {skill.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="ml-8 text-right">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatCurrency(skill.hourlyRate)}
              </div>
              <div className="text-gray-500">per hour</div>
            </div>
          </div>

          {/* Instructor Info */}
          <div className="flex items-center p-6 bg-gray-50 rounded-lg">
            <img
              src={skill.instructor.avatar}
              alt={skill.instructor.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {skill.instructor.name}
              </h3>
              <div className="flex items-center mb-2">
                {renderStarRating(skill.instructor.rating)}
                <span className="text-sm text-gray-500 ml-2">
                  {skill.instructor.rating} ({skill.instructor.totalStudents} students)
                </span>
              </div>
              <p className="text-gray-600">
                Expert instructor with proven track record in {skill.category}
              </p>
            </div>
            <Link
              to={`/chat/instructor-${skill.instructor.name.replace(' ', '-').toLowerCase()}`}
              className="btn-secondary"
            >
              Message Instructor
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Select Date & Time
          </h3>
          
          <div className="mb-6">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
              className="w-full"
            />
          </div>

          <div>
            <h4 className="text-md font-medium text-gray-900 mb-3">
              Available Times for {selectedDate.toDateString()}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 text-sm rounded-md border transition-colors ${
                    selectedTime === time
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Booking Summary
          </h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Skill:</span>
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Instructor:</span>
              <span className="font-medium">{skill.instructor.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{skill.duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{selectedDate.toDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{selectedTime || 'Not selected'}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>{formatCurrency((skill.hourlyRate * skill.duration) / 60)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBookLesson}
            disabled={!selectedTime}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Book Lesson
          </button>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
            You can cancel or reschedule up to 24 hours before the lesson
          </p>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirm Booking
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to book this lesson? You will be charged{' '}
              <span className="font-semibold">
                {formatCurrency((skill.hourlyRate * skill.duration) / 60)}
              </span>{' '}
              for a {skill.duration}-minute session.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 btn-primary"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillDetailPage;