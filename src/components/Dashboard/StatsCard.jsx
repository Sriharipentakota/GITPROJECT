import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon: Icon, color, bgColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
  className="card p-4"
    >
  <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="fs-6 fw-medium text-secondary mb-1">
            {title}
          </p>
          <p className="fs-3 fw-bold text-dark mb-0">
            {value}
          </p>
        </div>
        <div className={`p-2 rounded bg-primary bg-opacity-75`}>
          <Icon style={{ width: '24px', height: '24px', color: '#fff' }} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;