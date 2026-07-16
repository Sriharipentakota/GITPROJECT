import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQRLibrary } from '../../hooks/useQRLibrary';
import { triggerFileDownload } from '../../utils/urlUtils';
import { TEMPLATES } from '../../constants';

function timeAgo(ts) {
  if (!ts) return '';
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return `${min}m ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(ts).toLocaleDateString();
}

function LibraryPage() {
  const navigate = useNavigate();
  const { items, deleteQR, duplicateQR, toggleFavorite, renameQR } = useQRLibrary();

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterFav, setFilterFav] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [renamingId, setRenamingId] = useState(null);
  const [renameValue, setRenameValue] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const templateTypes = useMemo(() => {
    const used = [...new Set(items.map(i => i.templateId))];
    return ['all', ...used];
  }, [items]);

  const filtered = useMemo(() => {
    let list = [...items];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(i => i.name.toLowerCase().includes(q) || (i.content || '').toLowerCase().includes(q));
    }
    if (filterType !== 'all') list = list.filter(i => i.templateId === filterType);
    if (filterFav) list = list.filter(i => i.favorite);
    switch (sortBy) {
      case 'newest': list.sort((a, b) => b.createdAt - a.createdAt); break;
      case 'oldest': list.sort((a, b) => a.createdAt - b.createdAt); break;
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'updated': list.sort((a, b) => b.updatedAt - a.updatedAt); break;
      default: break;
    }
    return list;
  }, [items, search, filterType, filterFav, sortBy]);

  function handleDownload(item) {
    if (item.dataURL) triggerFileDownload(item.dataURL, `${item.name}.png`);
  }

  function handleEdit(item) {
    navigate('/create');
  }

  function startRename(item) {
    setRenamingId(item.id);
    setRenameValue(item.name);
  }

  function commitRename() {
    if (renamingId && renameValue.trim()) renameQR(renamingId, renameValue.trim());
    setRenamingId(null);
  }

  function handleDelete(id) {
    if (confirmDeleteId === id) {
      deleteQR(id);
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
      setTimeout(() => setConfirmDeleteId(null), 3000);
    }
  }

  const getTemplateLabel = (id) => {
    const t = TEMPLATES.find(t => t.id === id);
    return t ? `${t.icon} ${t.name}` : id;
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div className="page-title">My QR Codes</div>
            <div className="page-subtitle">{items.length} saved QR code{items.length !== 1 ? 's' : ''}</div>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/create')}>
            + Create New
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="library-toolbar">
        {/* Search */}
        <div className="search-box">
          <span className="search-box-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input className="search-input" placeholder="Search by name or content…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {/* Type filter */}
        <select className="filter-select" value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          {templateTypes.filter(t => t !== 'all').map(t => (
            <option key={t} value={t}>{TEMPLATES.find(x => x.id === t)?.name || t}</option>
          ))}
        </select>

        {/* Sort */}
        <select className="filter-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="updated">Last updated</option>
          <option value="name">Name A–Z</option>
        </select>

        {/* Favorites toggle */}
        <button
          className={`btn ${filterFav ? 'btn-warning' : 'btn-secondary'} btn-sm`}
          onClick={() => setFilterFav(v => !v)}
          title="Show favorites only"
        >
          {filterFav ? '★ Favorites' : '☆ Favorites'}
        </button>

        {/* View toggle */}
        <div className="view-toggle">
          <button className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} title="Grid view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          </button>
          <button className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} title="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="library-body page-body">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">◫</div>
            <div className="empty-state-title">
              {items.length === 0 ? 'No QR codes yet' : 'No results found'}
            </div>
            <p className="empty-state-text">
              {items.length === 0
                ? 'Create your first QR code in the Create Studio and save it to see it here.'
                : 'Try a different search or filter.'}
            </p>
            {items.length === 0 && (
              <button className="btn btn-primary" onClick={() => navigate('/create')}>
                Create Your First QR
              </button>
            )}
          </div>
        ) : viewMode === 'grid' ? (
          <div className="library-grid">
            {filtered.map(item => (
              <div key={item.id} className="qr-card">
                <div className="qr-card-thumb">
                  {item.dataURL
                    ? <img src={item.dataURL} alt={item.name} />
                    : <div style={{ fontSize: '2rem', opacity: 0.3 }}>◫</div>
                  }
                  <button className="qr-card-fav" onClick={() => toggleFavorite(item.id)}>
                    {item.favorite ? '★' : '☆'}
                  </button>
                </div>
                <div className="qr-card-body">
                  {renamingId === item.id ? (
                    <input
                      autoFocus
                      value={renameValue}
                      onChange={e => setRenameValue(e.target.value)}
                      onBlur={commitRename}
                      onKeyDown={e => { if (e.key === 'Enter') commitRename(); if (e.key === 'Escape') setRenamingId(null); }}
                      className="field-input"
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.8125rem', marginBottom: '0.25rem' }}
                    />
                  ) : (
                    <div className="qr-card-name" onClick={() => startRename(item)} title="Click to rename">{item.name}</div>
                  )}
                  <div className="qr-card-meta">
                    <span className="badge badge-gray" style={{ marginRight: '0.4rem' }}>
                      {getTemplateLabel(item.templateId)}
                    </span>
                    {timeAgo(item.updatedAt)}
                  </div>
                  <div className="qr-card-actions">
                    <button className="btn btn-secondary btn-sm" onClick={() => handleDownload(item)} title="Download PNG">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => duplicateQR(item.id)} title="Duplicate">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                    <button
                      className={`btn btn-sm ${confirmDeleteId === item.id ? 'btn-danger' : 'btn-ghost'}`}
                      onClick={() => handleDelete(item.id)}
                      title={confirmDeleteId === item.id ? 'Click again to confirm delete' : 'Delete'}
                    >
                      {confirmDeleteId === item.id ? 'Confirm' : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="library-list">
            {filtered.map(item => (
              <div key={item.id} className="qr-list-item">
                <div className="qr-list-thumb">
                  {item.dataURL
                    ? <img src={item.dataURL} alt={item.name} />
                    : <div style={{ fontSize: '1.5rem', opacity: 0.3 }}>◫</div>
                  }
                </div>
                <div className="qr-list-body">
                  {renamingId === item.id ? (
                    <input
                      autoFocus
                      value={renameValue}
                      onChange={e => setRenameValue(e.target.value)}
                      onBlur={commitRename}
                      onKeyDown={e => { if (e.key === 'Enter') commitRename(); if (e.key === 'Escape') setRenamingId(null); }}
                      className="field-input"
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.8125rem', marginBottom: '0.2rem' }}
                    />
                  ) : (
                    <div className="qr-list-name" onClick={() => startRename(item)} title="Click to rename">{item.name}</div>
                  )}
                  <div className="qr-list-meta">
                    {getTemplateLabel(item.templateId)} · {timeAgo(item.updatedAt)}
                    {item.favorite && <span style={{ marginLeft: '0.4rem' }}>★</span>}
                  </div>
                </div>
                <div className="qr-list-actions">
                  <button className="btn btn-ghost btn-icon" onClick={() => toggleFavorite(item.id)} title="Toggle favorite">
                    {item.favorite ? '★' : '☆'}
                  </button>
                  <button className="btn btn-ghost btn-icon" onClick={() => handleDownload(item)} title="Download">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                  <button className="btn btn-ghost btn-icon" onClick={() => duplicateQR(item.id)} title="Duplicate">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  </button>
                  <button
                    className={`btn btn-icon ${confirmDeleteId === item.id ? 'btn-danger' : 'btn-ghost'}`}
                    onClick={() => handleDelete(item.id)}
                    title={confirmDeleteId === item.id ? 'Click again to confirm' : 'Delete'}
                    style={{ fontSize: '0.75rem' }}
                  >
                    {confirmDeleteId === item.id ? '✓' : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LibraryPage;
