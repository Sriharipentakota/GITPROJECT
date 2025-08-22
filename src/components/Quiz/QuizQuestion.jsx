import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const QuizQuestion = ({ question, selectedAnswer, onAnswerSelect, showExplanation, onShowExplanation }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
  <div className="card p-4">
      {/* Question Header */}
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <span className="badge bg-primary bg-opacity-10 text-primary fw-medium">
          {question.category}
        </span>
        <span className="badge bg-secondary bg-opacity-10 text-secondary fw-medium">
          {question.difficulty}
        </span>
      </div>

      {/* Question */}
  <h2 className="fs-5 fw-semibold text-dark mb-4">{question.question}</h2>

      {/* Options */}
  <div className="d-flex flex-column gap-3 mb-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const isIncorrect = showExplanation && isSelected && !isCorrect;
          const shouldHighlightCorrect = showExplanation && isCorrect;

          return (
            <motion.button
              key={index}
              whileHover={{ scale: !showExplanation ? 1.02 : 1 }}
              whileTap={{ scale: !showExplanation ? 0.98 : 1 }}
              onClick={() => !showExplanation && onAnswerSelect(index)}
              disabled={showExplanation}
              className={`p-3 rounded border-2 text-start transition-all ${
                showExplanation
                  ? shouldHighlightCorrect
                    ? 'border-success bg-success bg-opacity-10 text-success'
                    : isIncorrect
                    ? 'border-danger bg-danger bg-opacity-10 text-danger'
                    : 'border-light bg-white text-dark'
                  : isSelected
                    ? 'border-primary bg-primary bg-opacity-10 text-primary'
                    : 'border-light bg-white text-dark'
              }`}
            >
              <div className="d-flex align-items-center justify-content-between">
                <span className="flex-grow-1">
                  <span className="fw-medium me-2 text-secondary">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </span>
                {showExplanation && (
                  <span className="ms-2">
                    {shouldHighlightCorrect ? (
                      <CheckCircle style={{ width: '22px', height: '22px', color: '#198754' }} />
                    ) : isIncorrect ? (
                      <XCircle style={{ width: '22px', height: '22px', color: '#dc3545' }} />
                    ) : null}
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-info bg-opacity-10 rounded p-3 border-start border-info"
        >
          <h3 className="fs-6 fw-semibold text-info mb-2">Explanation</h3>
          <p className="text-info mb-0">{question.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default QuizQuestion;