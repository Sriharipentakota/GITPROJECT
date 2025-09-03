/**
 * Section Header Component
 * 
 * Reusable header component for portfolio sections with integrated edit functionality.
 * Features consistent styling and smooth animations across all sections.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Edit3 } from 'lucide-react';

const SectionHeader = ({ title, subtitle, onEdit }) => {
  return (
    <motion.div
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <motion.button
          onClick={onEdit}
          className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Edit3 size={16} />
        </motion.button>
      </div>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;