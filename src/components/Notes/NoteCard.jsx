import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Calendar, Tag } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'React': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'CSS': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Data Structures': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Algorithms': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'Other': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[category] || colors['Other'];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="card p-4 h-100 group"
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div className="flex-grow-1">
          <h3 className="fs-5 fw-semibold text-dark mb-2 group-hover text-primary">
            {note.title}
          </h3>
          <div className="d-flex align-items-center gap-2 text-secondary small">
            <Calendar style={{ width: '16px', height: '16px' }} />
            <span>{formatDate(note.createdAt)}</span>
          </div>
        </div>
        <div className="d-flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="btn btn-light btn-sm rounded-circle"
            title="Edit note"
          >
            <Edit style={{ width: '16px', height: '16px' }} />
          </button>
          <button
            onClick={onDelete}
            className="btn btn-light btn-sm rounded-circle text-danger"
            title="Delete note"
          >
            <Trash2 style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Category */}
      <div className="mb-3">
        <span className="badge bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center gap-1">
          <Tag style={{ width: '14px', height: '14px' }} />
          {note.category}
        </span>
      </div>

      {/* Content Preview */}
      <div className="text-secondary small mb-3 flex-grow-1">
        {truncateText(note.content)}
      </div>

      {/* Tags */}
      {note.tags && note.tags.length > 0 && (
        <div className="d-flex flex-wrap gap-1">
          {note.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="badge bg-light text-secondary small"
            >
              #{tag}
            </span>
          ))}
          {note.tags.length > 3 && (
            <span className="badge bg-light text-secondary small">
              +{note.tags.length - 3} more
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default NoteCard;