import React from 'react';
import { useAppContext } from '../../context/AppContext';

const ProfilePage = () => {
  const { user } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
        <div className="flex items-center mb-6">
          <img
            src={user?.avatar || 'https://via.placeholder.com/100'}
            alt={user?.name}
            className="w-20 h-20 rounded-full mr-6"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-gray-600">{user?.location}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
            <p className="text-gray-600">{user?.bio || 'No bio provided'}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stats</h3>
            <p className="text-gray-600">Rating: {user?.rating || 'N/A'}</p>
            <p className="text-gray-600">Completed Lessons: {user?.completedLessons || 0}</p>
            <p className="text-gray-600">Total Earnings: ${user?.totalEarnings || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;