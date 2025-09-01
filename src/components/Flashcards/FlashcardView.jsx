import React, { useState, useEffect } from 'react';
import axios from 'axios'; // <-- Added axios import
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FlashcardComponent from './FlashcardComponent';
import FilterPanel from './FilterPanel';

const PAGE_SIZE = 9;
const categories = [
  'HTML', 'JavaScript', 'React', 'CSS', 'Data Structures', 'Algorithms', 'Other'
];
const difficulties = [
  'beginner', 'intermediate', 'advanced'
];
const API_URL = 'http://gitproject-kvcw.onrender.com/api/flashcards';
// const API_URL = 'https://localhost:5000/api/flashcards';
// const API_URL = 'http://localhost:5000/api/flashcards';

const defaultFilters = {
  category: 'all',
  difficulty: 'all',
  bookmarked: false,
};

const FlashcardView = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddFlashcard, setShowAddFlashcard] = useState(false);
  const [showEditFlashcard, setShowEditFlashcard] = useState(false);
  const [editFlashcard, setEditFlashcard] = useState(null);
  const [newFlashcard, setNewFlashcard] = useState({
    question: '', answer: '', category: '', difficulty: '', tags: '',
  });
  const [bulkUploadLoading, setBulkUploadLoading] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  useEffect(() => { fetchFlashcards(); }, []);

  // Use axios for fetching flashcards
  const fetchFlashcards = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setFlashcards(res.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
    setLoading(false);
  };

  // Filtering logic
  const filteredCards = flashcards.filter(card => {
    const matchesCategory = filters.category === 'all' || card.category === filters.category;
    const matchesDifficulty = filters.difficulty === 'all' || card.difficulty === filters.difficulty;
    const matchesBookmarked = !filters.bookmarked || favorites.includes(card._id || card.id);
    return matchesCategory && matchesDifficulty && matchesBookmarked;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCards.length / PAGE_SIZE);
  const paginatedCards = filteredCards.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Add flashcard (axios)
  const handleAddFlashcard = async (e) => {
    e.preventDefault();
    if (!newFlashcard.question || !newFlashcard.answer) return;
    const payload = {
      ...newFlashcard,
      tags: newFlashcard.tags ? newFlashcard.tags.split(',').map(t => t.trim()) : [],
    };
    try {
      await axios.post(API_URL, payload);
      setShowAddFlashcard(false);
      setNewFlashcard({ question: '', answer: '', category: '', difficulty: '', tags: '' });
      fetchFlashcards();
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  // Edit flashcard (axios)
  const handleEditFlashcard = async (e) => {
    e.preventDefault();
    if (!editFlashcard.question || !editFlashcard.answer) return;
    const payload = {
      ...editFlashcard,
      tags: editFlashcard.tags ? editFlashcard.tags.split(',').map(t => t.trim()) : [],
    };
    try {
      await axios.put(`${API_URL}/${editFlashcard._id}`, payload);
      setShowEditFlashcard(false);
      setEditFlashcard(null);
      fetchFlashcards();
    } catch (error) {
      console.error('Error editing flashcard:', error);
    }
  };

  // Delete flashcard (axios)
  const handleDeleteFlashcard = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchFlashcards();
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  // Bulk upload (axios)
  const handleBulkUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBulkUploadLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post(`${API_URL}/bulk-upload`, formData);
      setBulkUploadLoading(false);
      fetchFlashcards();
    } catch (error) {
      console.error('Error bulk uploading:', error);
      setBulkUploadLoading(false);
    }
  };

  // ...existing code...
  // CSV/Excel bulk upload handler
  const handleCsvExcelUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBulkUploadLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post(`${API_URL}/bulk-upload-csv`, formData);
      setBulkUploadLoading(false);
      fetchFlashcards();
    } catch (error) {
      console.error('Error bulk uploading CSV/Excel:', error);
      setBulkUploadLoading(false);
    }
  };
  // ...existing code...

  // Flip logic per card
  const handleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Favorite logic per card
  const handleToggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id)
      ? prev.filter(favId => favId !== id)
      : [...prev, id]
    );
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="mx-auto" style={{ maxWidth: '900px' }}>
      {/* Header & Controls */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3">
        <div>
          {/* Header & Controls */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3">
            <div>
              <h1 className="fs-2 fw-bold text-dark mb-1">Flashcards</h1>
              <p className="text-secondary">{filteredCards.length} cards</p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary" onClick={() => setShowAddFlashcard(true)}>+ Add Flashcard</button>
              <button className="btn btn-secondary" onClick={() => setShowFilterPanel(true)}>Filters</button>
            </div>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
              <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {/* Bulk Upload */}
              <div className="mb-3 d-flex gap-3 align-items-center">
                <div>
                  <label className="form-label">Bulk Upload (.docx):</label>
                  <input type="file" accept=".docx" onChange={handleBulkUpload} disabled={bulkUploadLoading} />
                  {bulkUploadLoading && <span className="ms-2 text-primary">Uploading...</span>}
                </div>
                <div>
                  <label className="form-label">Bulk Upload (.csv, .xlsx):</label>
                  <input
                    type="file"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={handleCsvExcelUpload}
                    disabled={bulkUploadLoading}
                  />
                </div>
              </div>
              {/* Filter Panel Modal */}
              {showFilterPanel && (
                <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 20 }}>
                  <div className="modal-content p-4 bg-white rounded shadow" style={{ maxWidth: 500, margin: '40px auto' }}>
                    <FilterPanel filters={filters} setFilters={setFilters} onClose={() => setShowFilterPanel(false)} />
                  </div>
                </div>
              )}
              {/* Add Flashcard Modal */}
              {showAddFlashcard && (
                <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 20 }}>
                  <div className="modal-content p-4 bg-white rounded shadow" style={{ maxWidth: 400, margin: '40px auto' }}>
                    <h2 className="mb-3">Add New Flashcard</h2>
                    <form onSubmit={handleAddFlashcard}>
                      <div className="mb-2">
                        <label>Question</label>
                        <input type="text" className="form-control" value={newFlashcard.question} onChange={e => setNewFlashcard({ ...newFlashcard, question: e.target.value })} required />
                      </div>
                      <div className="mb-2">
                        <label>Answer</label>
                        <input type="text" className="form-control" value={newFlashcard.answer} onChange={e => setNewFlashcard({ ...newFlashcard, answer: e.target.value })} required />
                      </div>
                      <div className="mb-2">
                        <label>Category</label>
                        <select className="form-select" value={newFlashcard.category} onChange={e => setNewFlashcard({ ...newFlashcard, category: e.target.value })} required>
                          <option value="">Select Category</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat.toLowerCase()}>{cat.toLowerCase()}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label>Difficulty</label>
                        <select className="form-select" value={newFlashcard.difficulty} onChange={e => setNewFlashcard({ ...newFlashcard, difficulty: e.target.value })} required>
                          <option value="">Select Difficulty</option>
                          {difficulties.map(diff => (
                            <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label>Tags (comma separated)</label>
                        <input type="text" className="form-control" value={newFlashcard.tags} onChange={e => setNewFlashcard({ ...newFlashcard, tags: e.target.value })} />
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Add</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowAddFlashcard(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {/* Edit Flashcard Modal */}
              {showEditFlashcard && editFlashcard && (
                <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 20 }}>
                  <div className="modal-content p-4 bg-white rounded shadow" style={{ maxWidth: 400, margin: '40px auto' }}>
                    <h2 className="mb-3">Edit Flashcard</h2>
                    <form onSubmit={handleEditFlashcard}>
                      <div className="mb-2">
                        <label>Question</label>
                        <input type="text" className="form-control" value={editFlashcard.question} onChange={e => setEditFlashcard({ ...editFlashcard, question: e.target.value })} required />
                      </div>
                      <div className="mb-2">
                        <label>Answer</label>
                        <input type="text" className="form-control" value={editFlashcard.answer} onChange={e => setEditFlashcard({ ...editFlashcard, answer: e.target.value })} required />
                      </div>
                      <div className="mb-2">
                        <label>Category</label>
                        <select className="form-select" value={editFlashcard.category} onChange={e => setEditFlashcard({ ...editFlashcard, category: e.target.value })} required>
                          <option value="">Select Category</option>
                          {categories.map(cat => (
                            <option key={cat} value={cat.toLowerCase()}>{cat.toLowerCase()}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label>Difficulty</label>
                        <select className="form-select" value={editFlashcard.difficulty} onChange={e => setEditFlashcard({ ...editFlashcard, difficulty: e.target.value })} required>
                          <option value="">Select Difficulty</option>
                          {difficulties.map(diff => (
                            <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label>Tags (comma separated)</label>
                        <input type="text" className="form-control" value={editFlashcard.tags} onChange={e => setEditFlashcard({ ...editFlashcard, tags: e.target.value })} />
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setShowEditFlashcard(false)}>Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {/* Flashcard Grid with Pagination */}
              <div className="row g-3 my-4">
                {paginatedCards.map((card) => {
                  const cardId = card._id || card.id;
                  return (
                    <div key={cardId} className="col-md-4">
                      <div className="card p-2" style={{ minHeight: '220px' }}>
                        <FlashcardComponent
                          card={card}
                          isFlipped={!!flippedCards[cardId]}
                          onFlip={() => handleFlip(cardId)}
                          isBookmarked={favorites.includes(cardId)}
                          onToggleBookmark={() => handleToggleFavorite(cardId)}
                        />
                        <div className="mt-2 d-flex gap-2 justify-content-center">
                          <button className="btn btn-sm btn-warning" onClick={() => { setEditFlashcard(card); setShowEditFlashcard(true); }}>Edit</button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteFlashcard(cardId)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Material UI Pagination Controls */}
              <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%', mt: 2 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(e, page) => setCurrentPage(page)}
                  color="primary"
                  siblingCount={window.innerWidth < 600 ? 0 : 1}
                  boundaryCount={window.innerWidth < 600 ? 1 : 2}
                  size={window.innerWidth < 600 ? 'small' : 'medium'}
                  showFirstButton
                  showLastButton
                />
              </Stack>
            </>
          )}
        </div>
      </div>
    </div>

  );
};

export default FlashcardView;