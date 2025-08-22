import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const FlashcardComponent = ({ card, isFlipped, onFlip, isBookmarked, onToggleBookmark }) => {
  if (!card) return null;

  return (
  <div className="position-relative w-100 mx-auto" style={{ maxWidth: '640px', height: '20rem' }}>
      <motion.div
        className="flip-card w-100 h-100 cursor-pointer"
        onClick={onFlip}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="flip-card-inner w-100 h-100"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div className="flip-card-front position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-4 p-4 d-flex flex-column justify-content-center align-items-center text-white shadow-lg">
            <div className="position-absolute top-0 end-0 m-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark();
                }}
                className={`btn btn-sm rounded-circle ${isBookmarked ? 'btn-warning text-dark' : 'btn-light text-secondary'}`}
                style={{ opacity: isBookmarked ? 1 : 0.7 }}
              >
                <Bookmark style={{ width: '20px', height: '20px' }} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <div className="text-center w-100">
              <div className="fs-6 text-white-50 mb-2">QUESTION</div>
              <h2 className="fs-4 fw-semibold lh-base w-100 break-words whitespace-normal overflow-hidden">
                {card.question}
              </h2>
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 fs-6 text-white-50">
              Click to reveal answer
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back position-absolute top-0 start-0 w-100 h-100 bg-success rounded-4 p-4 d-flex flex-column justify-content-center align-items-center text-white shadow-lg">
            <div className="position-absolute top-0 end-0 m-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark();
                }}
                className={`btn btn-sm rounded-circle ${isBookmarked ? 'btn-warning text-dark' : 'btn-light text-secondary'}`}
                style={{ opacity: isBookmarked ? 1 : 0.7 }}
              >
                <Bookmark style={{ width: '20px', height: '20px' }} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <div className="text-center w-100">
              <div className="fs-6 text-white-50 mb-2">ANSWER</div>
              <p className="fs-5 lh-base">
                {card.answer}
              </p>
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 fs-6 text-white-50">
              Click to show question
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlashcardComponent;