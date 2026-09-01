import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardPage = () => {
  const { user, bookings, dispatch } = useAppContext();
  const [stats, setStats] = useState({
    totalBookings: 0,
    completedLessons: 0,
    upcomingLessons: 0,
    totalEarnings: 0,
    averageRating: 0,
    skillsOffered: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Simulate loading dashboard data
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    // Mock data for demonstration
    const mockBookings = [
      {
        id: '1',
        studentName: 'Alice Johnson',
        skillName: 'React Development',
        date: new Date(2024, 0, 15, 10, 0),
        duration: 60,
        status: 'completed',
        amount: 75
      },
      {
        id: '2',
        studentName: 'Bob Smith',
        skillName: 'UI/UX Design',
        date: new Date(2024, 0, 20, 14, 0),
        duration: 45,
        status: 'upcoming',
        amount: 60
      },
      {
        id: '3',
        studentName: 'Carol Davis',
        skillName: 'React Development',
        date: new Date(2024, 0, 22, 16, 0),
        duration: 90,
        status: 'upcoming',
        amount: 112.50
      }
    ];

    const mockActivities = [
      {
        id: '1',
        type: 'booking',
        message: 'New booking from Alice Johnson for React Development',
        timestamp: new Date(2024, 0, 18, 9, 30),
        icon: '📅'
      },
      {
        id: '2',
        type: 'completion',
        message: 'Completed lesson with Bob Smith - UI/UX Design',
        timestamp: new Date(2024, 0, 17, 15, 0),
        icon: '✅'
      },
      {
        id: '3',
        type: 'review',
        message: 'Received 5-star review from Carol Davis',
        timestamp: new Date(2024, 0, 16, 11, 15),
        icon: '⭐'
      }
    ];

    dispatch({ type: 'SET_BOOKINGS', payload: mockBookings });
    setRecentActivities(mockActivities);

    // Calculate stats
    const completed = mockBookings.filter(b => b.status === 'completed').length;
    const upcoming = mockBookings.filter(b => b.status === 'upcoming').length;
    const totalEarnings = mockBookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + b.amount, 0);

    setStats({
      totalBookings: mockBookings.length,
      completedLessons: completed,
      upcomingLessons: upcoming,
      totalEarnings: totalEarnings,
      averageRating: user?.rating || 4.8,
      skillsOffered: user?.skills?.length || 2
    });
  };

  // Chart data
  const earningsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [320, 450, 290, 680, 520, 750],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4
      }
    ]
  };

  const skillDistributionData = {
    labels: ['React Development', 'UI/UX Design', 'JavaScript', 'Node.js'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444'
        ],
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-blue-100">
          Here's what's happening with your learning journey today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Bookings</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed Lessons</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.completedLessons}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Upcoming Lessons</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.upcomingLessons}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Earnings</p>
              <p className="text-2xl font-semibold text-gray-900">{formatCurrency(stats.totalEarnings)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Earnings</h3>
          <div className="h-64">
            <Line data={earningsData} options={chartOptions} />
          </div>
        </div>

        {/* Skill Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Distribution</h3>
          <div className="h-64">
            <Doughnut data={skillDistributionData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Recent Activities and Upcoming Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <Link to="/bookings" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-xl">{activity.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{formatDate(activity.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Bookings</h3>
            <Link to="/bookings" className="text-primary-600 hover:text-primary-500 text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {bookings
              .filter(booking => booking.status === 'upcoming')
              .slice(0, 3)
              .map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{booking.skillName}</p>
                    <p className="text-sm text-gray-600">with {booking.studentName}</p>
                    <p className="text-xs text-gray-500">{formatDate(booking.date)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{formatCurrency(booking.amount)}</p>
                    <p className="text-xs text-gray-500">{booking.duration} min</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Link
            to="/profile"
            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">👤</div>
              <p className="text-sm font-medium text-gray-900">Edit Profile</p>
            </div>
          </Link>

          <Link
            to="/skills"
            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm font-medium text-gray-900">Browse Skills</p>
            </div>
          </Link>

          <Link
            to="/chat"
            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-sm font-medium text-gray-900">Messages</p>
            </div>
          </Link>

          <Link
            to="/bookings"
            className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">📅</div>
              <p className="text-sm font-medium text-gray-900">View Bookings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;