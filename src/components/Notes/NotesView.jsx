import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, BookOpen } from 'lucide-react';
import NoteEditor from './NoteEditor';
import NoteCard from './NoteCard';

const NotesView = () => {
  const API_URL = 'http://gitproject-kvcw.onrender.com/api/notes';
  const [notes, setNotes] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['JavaScript', 'React', 'CSS', 'Data Structures', 'Algorithms', 'Other'];

  // Fetch notes from backend
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const filteredAndSortedNotes = useMemo(() => {
    let filtered = notes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [notes, searchTerm, selectedCategory, sortBy]);

  const handleCreateNote = () => {
    setEditingNote(null);
    setShowEditor(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowEditor(true);
  };

  // Save note (create or update)
  const handleSaveNote = async (noteData) => {
    try {
      if (editingNote) {
        // PATCH update
        const res = await axios.patch(`${API_URL}/${editingNote._id || editingNote.id}`, noteData);
        setNotes(notes.map(n => (n._id === res.data._id ? res.data : n)));
      } else {
        // POST create
        const res = await axios.post(API_URL, noteData);
        setNotes([...notes, res.data]);
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
    setShowEditor(false);
    setEditingNote(null);
  };

  // Delete note
  const handleDeleteNote = async (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await axios.delete(`${API_URL}/${noteId}`);
        setNotes(notes.filter(n => n._id !== noteId && n.id !== noteId));
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setEditingNote(null);
  };

  return (
    <div className="d-flex flex-column gap-4 position-relative">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-2">
        <div>
          <h1 className="fs-2 fw-bold text-dark mb-1">Study Notes</h1>
          <p className="text-secondary">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</p>
        </div>
        <button
          onClick={handleCreateNote}
          className="btn btn-primary d-flex align-items-center gap-2"
        >
          <Plus style={{ width: '18px', height: '18px' }} />
          New Note
        </button>
      </div>

      {/* Filters and Search */}
      <div className="row g-3">
        <div className="col-md-4 position-relative">
          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#adb5bd', width: '16px', height: '16px' }} />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control ps-4"
          />
        </div>
        <div className="col-md-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-select"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Notes Grid */}
      {filteredAndSortedNotes.length > 0 ? (
        <div className="row g-4">
          <AnimatePresence>
            {filteredAndSortedNotes.map((note, index) => (
              <div className="col-md-6 col-lg-4" key={note._id || note.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NoteCard
                    note={note}
                    onEdit={() => handleEditNote(note)}
                    onDelete={() => handleDeleteNote(note._id || note.id)}
                  />
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-5"
        >
          <BookOpen style={{ width: '64px', height: '64px', color: '#adb5bd' }} className="mb-3" />
          <h3 className="fs-4 fw-semibold text-dark mb-2">
            {notes.length === 0 ? 'No notes yet' : 'No notes match your search'}
          </h3>
          <p className="text-secondary mb-4">
            {notes.length === 0
              ? 'Create your first study note to get started'
              : 'Try adjusting your search or filters'
            }
          </p>
          {notes.length === 0 && (
            <button
              onClick={handleCreateNote}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <Plus style={{ width: '18px', height: '18px' }} />
              Create Your First Note
            </button>
          )}
        </motion.div>
      )}

      {/* Editor Modal - moved to end and set higher z-index */}
      <AnimatePresence>
        {showEditor && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ zIndex: 1050 }}
          >
            <NoteEditor
              note={editingNote}
              onSave={handleSaveNote}
              onCancel={handleCancelEdit}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
    );
  }
  
  export default NotesView;