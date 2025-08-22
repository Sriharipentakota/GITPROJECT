import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Save, Tag } from 'lucide-react';

const NoteEditor = ({ note, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Other',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const categories = ['JavaScript', 'React', 'CSS', 'Data Structures', 'Algorithms', 'Other'];

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title || '',
        content: note.content || '',
        category: note.category || 'Other',
        tags: note.tags || []
      });
    }
  }, [note]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.content.trim()) {
      onSave(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
  className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
  className="bg-white rounded-4 shadow-lg w-100" style={{ maxWidth: '700px', maxHeight: '90vh', overflow: 'hidden' }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between p-4 border-bottom">
          <h2 className="fs-4 fw-semibold text-dark mb-0">
            {note ? 'Edit Note' : 'Create New Note'}
          </h2>
          <button
            onClick={onCancel}
            className="btn btn-light btn-sm rounded-circle"
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* Form */}
  <form onSubmit={handleSubmit} className="p-4 d-flex flex-column gap-4" style={{ maxHeight: 'calc(90vh - 120px)', overflowY: 'auto' }}>
          {/* Title */}
          <div>
            <label className="form-label">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter note title..."
              className="form-control"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="form-label">Category</label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="form-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="form-label">Tags</label>
            <div className="d-flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center gap-1"
                >
                  <Tag style={{ width: '14px', height: '14px' }} />
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="btn btn-link btn-sm text-primary ms-2"
                  >
                    <X style={{ width: '14px', height: '14px' }} />
                  </button>
                </span>
              ))}
            </div>
            <div className="d-flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagKeyPress}
                placeholder="Add a tag..."
                className="form-control flex-grow-1"
              />
              <button
                type="button"
                onClick={handleAddTag}
                disabled={!tagInput.trim()}
                className="btn btn-outline-primary"
              >
                Add
              </button>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="form-label">Content *</label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Write your note content here..."
              rows={10}
              className="form-control"
              required
            />
          </div>
        </form>

        {/* Footer */}
        <div className="d-flex justify-content-end gap-2 p-4 border-top">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.title.trim() || !formData.content.trim()}
            className="btn btn-primary"
          >
            <Save style={{ width: '16px', height: '16px', marginRight: '6px' }} />
            {note ? 'Update Note' : 'Save Note'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NoteEditor;