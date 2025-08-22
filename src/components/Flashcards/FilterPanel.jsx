import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const FilterPanel = ({ filters, setFilters, onClose }) => {
  const categories = ['JavaScript', 'React', 'CSS', 'Data Structures', 'Algorithms'];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
  className="card p-4"
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fs-5 fw-semibold text-dark mb-0">Filter Flashcards</h3>
        <button
          onClick={onClose}
          className="btn btn-light btn-sm rounded-circle"
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

  <div className="row g-3">
        {/* Category Filter */}
        <div className="col-md-4">
          <label className="form-label">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="form-select"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="col-md-4">
          <label className="form-label">Difficulty</label>
          <select
            value={filters.difficulty}
            onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
            className="form-select"
          >
            <option value="all">All Levels</option>
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Bookmarked Filter */}
        <div className="col-md-4">
          <label className="form-label">Show Only</label>
          <div className="form-check">
            <input
              type="checkbox"
              checked={filters.bookmarked}
              onChange={(e) => setFilters({ ...filters, bookmarked: e.target.checked })}
              className="form-check-input"
              id="bookmarkedCheck"
            />
            <label className="form-check-label" htmlFor="bookmarkedCheck">Bookmarked Cards</label>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-end gap-2">
        <button
          onClick={() => {
            setFilters({ category: 'all', difficulty: 'all', bookmarked: false });
            onClose();
          }}
          className="btn btn-outline-secondary"
        >
          Clear All
        </button>
        <button onClick={onClose} className="btn btn-primary">
          Apply Filters
        </button>
      </div>
    </motion.div>
  );
};

export default FilterPanel;