import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, CheckCircle, XCircle, RotateCcw, ArrowLeft } from 'lucide-react';

const QuizResults = ({ answers, questions, onRestart }) => {
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const score = Math.round((correctAnswers / questions.length) * 100);
  
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
  <div className="mx-auto d-flex flex-column gap-4" style={{ maxWidth: '900px' }}>
      {/* Results Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="d-inline-flex p-4 rounded-circle bg-primary text-white mb-4">
          <Trophy style={{ width: '48px', height: '48px' }} />
        </div>
        <h1 className="fs-2 fw-bold text-dark mb-2">Quiz Complete!</h1>
        <div className={`display-4 fw-bold mb-3 ${score >= 80 ? 'text-success' : score >= 60 ? 'text-warning' : 'text-danger'}`}>{score}%</div>
        <p className="fs-5 text-secondary mb-0">
          {score >= 80 ? '🎉 Excellent work!' : score >= 60 ? '👍 Good job!' : '💪 Keep practicing!'}
        </p>
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-3 text-center"
            >
              <CheckCircle style={{ width: '32px', height: '32px', color: '#198754' }} className="mb-2" />
              <div className="fs-3 fw-bold text-dark">{correctAnswers}</div>
              <div className="text-secondary">Correct</div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-3 text-center"
            >
              <XCircle style={{ width: '32px', height: '32px', color: '#dc3545' }} className="mb-2" />
              <div className="fs-3 fw-bold text-dark">{questions.length - correctAnswers}</div>
              <div className="text-secondary">Incorrect</div>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-3 text-center"
            >
              <Clock style={{ width: '32px', height: '32px', color: '#0d6efd' }} className="mb-2" />
              <div className="fs-3 fw-bold text-dark">{questions.length}</div>
              <div className="text-secondary">Total Questions</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Detailed Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card p-4"
      >
        <h2 className="fs-5 fw-semibold text-dark mb-4">Question Review</h2>
        <div className="d-flex flex-column gap-3">
          {questions.map((question, index) => {
            const answer = answers[index];
            const isCorrect = answer.isCorrect;
            return (
              <div
                key={question.id}
                className={`p-3 rounded border-start ${isCorrect ? 'border-success bg-success bg-opacity-10' : 'border-danger bg-danger bg-opacity-10'}`}
              >
                <div className="d-flex align-items-start justify-content-between mb-2">
                  <h3 className="fw-medium text-dark flex-grow-1 mb-0">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="ms-3">
                    {isCorrect ? (
                      <CheckCircle style={{ width: '20px', height: '20px', color: '#198754' }} />
                    ) : (
                      <XCircle style={{ width: '20px', height: '20px', color: '#dc3545' }} />
                    )}
                  </div>
                </div>
                <div className="small text-secondary">
                  {!isCorrect && (
                    <div>
                      Your answer: <span className="fw-medium text-danger">{question.options[answer.selectedAnswer]}</span>
                    </div>
                  )}
                  <div>
                    Correct answer: <span className="fw-medium text-success">{question.options[question.correctAnswer]}</span>
                  </div>
                </div>
                {!isCorrect && (
                  <div className="mt-2 p-2 bg-white rounded small text-dark">
                    <strong>Explanation:</strong> {question.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Actions */}
      <div className="d-flex justify-content-center gap-3">
        <button
          onClick={onRestart}
          className="btn btn-primary d-flex align-items-center gap-2"
        >
          <RotateCcw style={{ width: '18px', height: '18px' }} />
          Take Another Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResults;