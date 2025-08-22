import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Brain,
  StickyNote,
  TrendingUp,
  Target,
  Clock,
  Award,
  Calendar
} from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import ProgressChart from './ProgressChart';
import StatsCard from './StatsCard';

const Dashboard = () => {
  const { quizResults, notes, currentStreak, totalStudyTime } = useApp();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const recentQuizzes = quizResults.slice(-5);
  const averageScore = quizResults.length > 0 
    ? quizResults.reduce((acc, quiz) => acc + quiz.score, 0) / quizResults.length 
    : 0;
  
  const studyTimeHours = Math.floor(totalStudyTime / 3600000);
  const studyTimeMinutes = Math.floor((totalStudyTime % 3600000) / 60000);

  const quickActions = [
    {
      title: 'Study Flashcards',
      description: 'Review and practice with interactive flashcards',
      icon: BookOpen,
      link: '/flashcards',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Take Quiz',
      description: 'Test your knowledge with timed quizzes',
      icon: Brain,
      link: '/quiz',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Review Notes',
      description: 'Access your personal study notes',
      icon: StickyNote,
      link: '/notes',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="d-flex flex-column gap-4">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="display-5 fw-bold text-dark mb-2">
          {greeting}! Ready to learn?
        </h1>
        <p className="text-secondary fs-5">
          Continue your interview preparation journey
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="row g-4">
        <StatsCard
          title="Current Streak"
          value={`${currentStreak} days`}
          icon={Award}
          color="text-yellow-600"
          bgColor="bg-yellow-100 dark:bg-yellow-900"
        />
        <StatsCard
          title="Average Score"
          value={`${Math.round(averageScore)}%`}
          icon={Target}
          color="text-green-600"
          bgColor="bg-green-100 dark:bg-green-900"
        />
        <StatsCard
          title="Total Notes"
          value={notes.length}
          icon={StickyNote}
          color="text-blue-600"
          bgColor="bg-blue-100 dark:bg-blue-900"
        />
        <StatsCard
          title="Study Time"
          value={studyTimeHours > 0 ? `${studyTimeHours}h ${studyTimeMinutes}m` : `${studyTimeMinutes}m`}
          icon={Clock}
          color="text-purple-600"
          bgColor="bg-purple-100 dark:bg-purple-900"
        />
      </div>

      {/* Quick Actions */}
      <div className="row g-4">
        {quickActions.map((action, index) => (
          <div className="col-md-4" key={action.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={action.link} className="text-decoration-none">
                <div className="card p-4 h-100 shadow-sm hover-shadow-lg transition-all">
                  <div className="d-inline-flex p-3 rounded bg-primary text-white mb-3">
                    <action.icon style={{ width: '24px', height: '24px' }} />
                  </div>
                  <h3 className="fs-5 fw-semibold text-dark mb-2">
                    {action.title}
                  </h3>
                  <p className="text-secondary">
                    {action.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Progress Chart and Recent Activity */}
      <div className="row g-4">
        {/* Progress Chart */}
        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-4"
          >
            <h3 className="fs-5 fw-semibold text-dark mb-3 d-flex align-items-center">
              <TrendingUp style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Performance Trend
            </h3>
            <ProgressChart quizResults={recentQuizzes} />
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="col-lg-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-4"
          >
            <h3 className="fs-5 fw-semibold text-dark mb-3 d-flex align-items-center">
              <Calendar style={{ width: '20px', height: '20px', marginRight: '8px' }} />
              Recent Quiz Results
          </h3>
          <div className="d-flex flex-column gap-2">
            {recentQuizzes.length > 0 ? (
              recentQuizzes.map((quiz, index) => (
                <div key={index} className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                  <div>
                    <p className="fw-medium text-dark mb-0">{quiz.category}</p>
                    <p className="small text-secondary mb-0">{new Date(quiz.completedAt).toLocaleDateString()}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-pill small fw-medium ${
                    quiz.score >= 80 
                      ? 'bg-success bg-opacity-10 text-success'
                      : quiz.score >= 60
                      ? 'bg-warning bg-opacity-10 text-warning'
                      : 'bg-danger bg-opacity-10 text-danger'
                  }`}>
                    {quiz.score}%
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <Brain style={{ width: '48px', height: '48px', color: '#adb5bd' }} className="mb-2" />
                <p className="text-secondary mb-2">No quiz results yet</p>
                <Link to="/quiz" className="text-primary small">
                  Take your first quiz
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
    {/* Closing tag for main container */}
  </div>
  );
};

export default Dashboard;