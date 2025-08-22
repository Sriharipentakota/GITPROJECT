import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, RotateCcw, Play } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { quizQuestions } from '../../data/flashcards';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

const QuizView = () => {
  const { dispatch } = useApp();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    let timer;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleQuizComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, quizCompleted, timeLeft]);

  const startQuiz = () => {
    const shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
    setCurrentQuiz(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setTimeLeft(600);
    setQuizStarted(true);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, {
      questionId: currentQuiz[currentQuestionIndex].id,
      selectedAnswer,
      correctAnswer: currentQuiz[currentQuestionIndex].correctAnswer,
      isCorrect: selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer
    }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < currentQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = (finalAnswers = answers) => {
    const correctAnswers = finalAnswers.filter(answer => answer.isCorrect).length;
    const score = Math.round((correctAnswers / currentQuiz.length) * 100);
    
    const quizResult = {
      score,
      totalQuestions: currentQuiz.length,
      correctAnswers,
      category: 'Mixed',
      completedAt: new Date().toISOString(),
      timeTaken: 600 - timeLeft,
      answers: finalAnswers
    };

    dispatch({ type: 'ADD_QUIZ_RESULT', payload: quizResult });
    setQuizCompleted(true);
    setQuizStarted(false);
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(600);
    setQuizStarted(false);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (quizCompleted) {
    return (
      <QuizResults
        answers={answers}
        questions={currentQuiz}
        onRestart={resetQuiz}
      />
    );
  }

  if (!quizStarted) {
    return (
      <div className="mx-auto text-center" style={{ maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-5"
        >
          <div className="display-3 mb-4">🧠</div>
          <h1 className="fs-2 fw-bold text-dark mb-3">Ready for a Quiz?</h1>
          <p className="text-secondary mb-4">
            Test your knowledge with a timed quiz covering various topics.<br />
            You'll have 10 minutes to answer {quizQuestions.length} questions.
          </p>
          <div className="row g-3 mb-4">
            <div className="col text-center">
              <div className="fs-4 fw-bold text-primary">{quizQuestions.length}</div>
              <div className="small text-secondary">Questions</div>
            </div>
            <div className="col text-center">
              <div className="fs-4 fw-bold text-success">10</div>
              <div className="small text-secondary">Minutes</div>
            </div>
            <div className="col text-center">
              <div className="fs-4 fw-bold text-info">Mixed</div>
              <div className="small text-secondary">Topics</div>
            </div>
          </div>
          <button
            onClick={startQuiz}
            className="btn btn-primary fs-5 px-5 py-2 d-flex align-items-center gap-2"
          >
            <Play style={{ width: '20px', height: '20px' }} />
            Start Quiz
          </button>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = currentQuiz[currentQuestionIndex];

  return (
  <div className="mx-auto d-flex flex-column gap-4" style={{ maxWidth: '900px' }}>
      {/* Quiz Header */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="fs-4 fw-bold text-dark mb-1">Quiz in Progress</h1>
          <p className="text-secondary">Question {currentQuestionIndex + 1} of {currentQuiz.length}</p>
        </div>
        {/* Timer */}
        <div className={`d-flex align-items-center px-3 py-2 rounded-pill ${timeLeft < 60 ? 'bg-danger bg-opacity-10 text-danger' : 'bg-light text-secondary'}`}> 
          <Clock style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          <span className="font-monospace fs-5">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-100 bg-light rounded-pill" style={{ height: '12px' }}>
        <motion.div
          className="bg-primary rounded-pill"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex) / currentQuiz.length) * 100}%` }}
          transition={{ duration: 0.3 }}
          style={{ height: '12px' }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <QuizQuestion
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showExplanation={showExplanation}
            onShowExplanation={() => setShowExplanation(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={resetQuiz}
          className="btn btn-outline-secondary d-flex align-items-center gap-2"
        >
          <RotateCcw style={{ width: '18px', height: '18px' }} />
          Restart Quiz
        </button>
        <div className="d-flex gap-2">
          {!showExplanation && selectedAnswer !== null && (
            <button
              onClick={() => setShowExplanation(true)}
              className="btn btn-outline-info"
            >
              Show Explanation
            </button>
          )}
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="btn btn-primary"
          >
            {currentQuestionIndex === currentQuiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizView;