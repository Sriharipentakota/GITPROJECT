import React from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { skillId } = useParams();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Book a Lesson</h1>
        <p className="text-gray-600">Booking page for skill ID: {skillId}</p>
        <p className="text-gray-600 mt-2">This page is under development. Please use the skill detail page to book lessons.</p>
      </div>
    </div>
  );
};

export default BookingPage;